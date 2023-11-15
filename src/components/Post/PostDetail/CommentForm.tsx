import { commentUserResponseDto, getPostDetail, postComment } from '@apis/post/detail';
import { useState } from 'react';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import TextareaLabel from '@components/ui/Textarea';
import * as S from './style';
import { useParams } from 'react-router-dom';

function CommentForm() {
  const [comment, setComment] = useState('');
  const { communityId, postId } = useParams();
  const queryClient = useQueryClient();

  //게시글 상세 정보를 불러오는 쿼리
  const { isLoading, isError, data } = useQuery<commentUserResponseDto, Error>('detail', async () => {
    const result = await getPostDetail(Number(postId), Number(communityId));
    console.log(result);
    return result;
  });

  // 댓글 등록
  const commentMutation = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', Number(postId), Number(communityId)]);
    },
  });

  const handleCommentSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await commentMutation.mutateAsync({
        postId: Number(postId),
        communityId: Number(communityId),
        commentContent: comment,
      });
      console.log('postId, communityId, commenxtContent');
      setComment(''); // 댓글 입력 필드 초기화
    } catch (error) {
      console.error('댓글 게시 중 오류 발생', error);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'comment') {
      setComment(value);
    }
  };

  // 로딩 중이거나 에러가 발생했을 때 렌더링할 내용
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>에러가 발생하였습니다.{isError.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <S.CommentsForm>
      <S.FormBlock>
        <img
          src={data?.commentUserResponseDto?.commentUserProfileImg}
          style={{ width: '25px', height: '25px', borderRadius: '50%' }}
        />
        <div className="commentAuthor">{data?.commentUserResponseDto?.commentUserNickName}</div>
      </S.FormBlock>
      <TextareaLabel
        name="comment"
        value={comment}
        placeholder="자유롭게 댓글을 작성해주세요."
        onChange={onChange}
        required
      />
      <div className="FormBlockSubmit">
        <S.CommentFormBtn value="등록" className="formBtnSubmit" onClick={handleCommentSubmit}>
          등록
        </S.CommentFormBtn>
      </div>
    </S.CommentsForm>
  );
}

export default CommentForm;
