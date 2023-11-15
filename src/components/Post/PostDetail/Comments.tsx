import { useState } from 'react';
import TextareaLabel from '@components/ui/Textarea';
import * as S from './style';
import EllipsisIcon from '../../../assets/images/ellipsis.svg';
import { useParams } from 'react-router-dom';
import { getComments, CommentList, putComment, deleteComment } from '@apis/post/detail';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import jwtDecode from 'jwt-decode';
import { getCookie } from '@utils/cookies/cookies';

function Comments() {
  const queryClient = useQueryClient();
  const [editingCommentId, setEditingCommentId] = useState(null);
  const { communityId, postId } = useParams();
  const [editingComments, setEditingComments] = useState({});
  // 토큰
  const token: string | null = getCookie('accessToken');
  let loggedInUserId: string | null;
  let decodedToken: DecodedToken | null = null;

  decodedToken;
  if (token) {
    decodedToken = jwtDecode<DecodedToken>(token);
    loggedInUserId = decodedToken?.sub;
    console.log('Logged in user ID:', loggedInUserId);
  }

  // useQuery 훅을 사용하여 댓글 목록을 가져옴
  const { isLoading, isError, data } = useQuery<CommentList[], Error>(
    ['comments', Number(postId), Number(communityId)], // 쿼리 키 수정
    async () => {
      const result = await getComments(Number(postId), Number(communityId));
      console.log(result);
      return result;
    }
  );

  // 더보기 버튼 상태를 객체로 변경
  const [showOptions, setShowOptions] = useState({});

  // 더보기 버튼 토글 함수를 수정
  const toggleOptions = (id: any) => {
    setShowOptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  // const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const {
  //     target: { name, value },
  //   } = event;

  //   if (name === 'comment') {
  //     setComment(value);
  //   }
  // };

  // 댓글 수정
  const editCommentMutation = useMutation(putComment, {
    onSuccess: () => {
      // 쿼리 키를 올바르게 설정하여 해당 댓글 목록 쿼리를 다시 불러옴
      queryClient.invalidateQueries(['comments', Number(postId), Number(communityId)]); // 수정
      setEditingCommentId(null); // 댓글 수정 모드 종료
    },
  });

  // 댓글 삭제
  const deleteCommentMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    },
  });

  const handleDeleteComment = (commentId: number, communityId: number) => {
    try {
      deleteCommentMutation.mutateAsync({ commentId, communityId });
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditSubmit = async (commentId) => {
    try {
      await editCommentMutation.mutateAsync({
        commentId: commentId,
        communityId: Number(communityId),
        commentContent: editingComments[commentId],
      });
      setEditingComments((prev) => {
        const newState = { ...prev };
        delete newState[commentId];
        return newState;
      });
    } catch (error) {
      console.error('댓글 수정 중 오류 발생', error);
    }
  };

  // const getCommentId = (commentItem) => {
  //   return commentItem.commentId;
  // };

  // const handleDeleteComment = async (commentId, communityId) => {
  //   try {
  //     await deleteCommentMutation.mutateAsync({ commentId, communityId });
  //   } catch (error) {
  //     console.error('댓글 삭제 실패:', error);
  //   }
  // };

  // 로딩 중이거나 에러가 발생했을 때 렌더링할 내용
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>에러가 발생하였습니다.{isError.message}</div>;
  // }

  if (!data) {
    return <div>아직 작성된 댓글이 없습니다.</div>;
  }

  return (
    <>
      <div className="Comment">Comment</div>
      {data &&
        data.commentList &&
        data.commentList.map((commentItem: any) => (
          <S.CommentsList key={commentItem.commentId}>
            <S.CommentBox>
              <S.CommentProfileBox>
                <S.ProfileWrap>
                  <img
                    src={commentItem.profileImg}
                    style={{
                      width: '25px',
                      height: '25px',
                      borderRadius: '50%',
                    }}
                  />
                </S.ProfileWrap>
                <S.CommentAuthor>{commentItem.commentAuthor}</S.CommentAuthor>
                <S.CommentText>{commentItem.commentContent}</S.CommentText>
                <S.CommentDate>{commentItem.commentCreatedAt}</S.CommentDate>
                {Number(commentItem.userId) === Number(decodedToken?.sub) && (
                  <S.OptionArea className="optionsIcon" onClick={() => toggleOptions(commentItem.commentId)}>
                    <img src={EllipsisIcon} alt="더보기" style={{ width: '20px', height: '20px' }} />
                    {showOptions[commentItem.commentId] && (
                      <div className="optionsDropdown">
                        <S.CommentOptionBtn
                          className="commentEdit"
                          onClick={() => {
                            setEditingComments({
                              ...editingComments,
                              [commentItem.commentId]: commentItem.commentContent,
                            });
                          }}
                        >
                          수정
                        </S.CommentOptionBtn>
                        <S.CommentOptionBtn
                          className="commentDelete"
                          onClick={() => handleDeleteComment(commentItem.commentId, communityId)}
                        >
                          삭제
                        </S.CommentOptionBtn>
                      </div>
                    )}
                  </S.OptionArea>
                )}
              </S.CommentProfileBox>
              {editingComments[commentItem.commentId] && (
                <>
                  <TextareaLabel
                    name="comment"
                    id="comment"
                    required
                    value={editingComments[commentItem.commentId]}
                    placeholder="댓글을 수정해주세요."
                    onChange={(event) =>
                      setEditingComments({
                        ...editingComments,
                        [commentItem.commentId]: event.target.value,
                      })
                    }
                  />
                  <S.CommentOptionBtnContainer>
                    <S.CommentOptionBtn title="edit" onClick={() => handleEditSubmit(commentItem.commentId)}>
                      등록
                    </S.CommentOptionBtn>
                  </S.CommentOptionBtnContainer>
                </>
              )}
            </S.CommentBox>
          </S.CommentsList>
        ))}
    </>
  );
}
export default Comments;
