import React from 'react';
import * as S from '@pages/community/stlyes/PostStyle.ts';
import * as W from '@pages/community/stlyes/SubLayoutCommon.ts';
import PostUserProfile from '@pages/community/[communityId]/post/postpageComponent/PostUserProfile';
import { Link } from 'react-router-dom';
import { useCommunityId } from '@hooks/useParamsId/useCommunityId';
import PostList from '@pages/community/[communityId]/post/postpageComponent/PostList';

const PostPage = () => {
  //useparams로 받아온 커뮤니티 아이디
  const communityIdNumber = useCommunityId();

  type PostListProps = {
    communityIdNumber: number | undefined;
  };

  return (
    <W.PostCommonLayout>
      <S.PostListWrap>
        <PostUserProfile />
        <S.PostWriteBtnWrap>
          <S.PostWriteBtn>
            <Link to={`/community/${communityIdNumber}/post/create`}>글쓰기</Link>
          </S.PostWriteBtn>
        </S.PostWriteBtnWrap>
        <PostList communityIdNumber={communityIdNumber} />
      </S.PostListWrap>
    </W.PostCommonLayout>
  );
};

export default PostPage;
