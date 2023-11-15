import { axiosImgInstance, axiosInstance } from '@apis/axiosInstance/axiosInstance';
export interface PosterDetail {
  posterDetail: any;
  data: PosterDetail | PromiseLike<PosterDetail>;
  userId: number;
  posterId: number;
  posterTitle: string;
  posterContent: string;
  posterAuthor: string;
  heartCount: number;
  posterImgPath: string;
  profileImg: string;
  posterCreatedAt: string;
  posterUpdatedAt: string;
}
export interface commentUserResponseDto {
  commentUserId: number;
  commentUserNickName: string;
  commentUserProfileImg: string;
}

export interface CommentList {
  commentId: number;
  commentContent: string;
  commentAuthor: string;
  commentCreatedAt: string;
  commentUpdatedAt: string;
  profileImg: string;
}

interface CommentData {
  commentContent: string;
  postId: number;
  communityId: number;
}

// 게시글 상세 내용
// export const getPostDetail = async (postId: number, communityId: number): Promise<PosterDetail> => {
//   const response = await axiosImgInstance.get<PosterDetail>(`poster/${postId}/community?communityId=${communityId}`);
//   return response.data.data;
// };

export const getPostDetail = async (postId: number, communityId: number) => {
  const response = await axiosImgInstance.get(`poster/${postId}/community?communityId=${communityId}`);
  return response.data.data;
};

export const likePost = async (postId: number, communityId: number) => {
  const response = await axiosImgInstance.post(`like/poster/${postId}/community?communityId=${communityId}`);
  if (!response.data) {
    console.error('API response does not contain data.');
    return null; // 또는 오류 처리 방식을 선택합니다.
  }
  return response.data;
};

// 게시글 상세 코멘트
export const getComments = async (postId: number, communityId: number): Promise<CommentList[]> => {
  const response = await axiosImgInstance.get(`comment/poster/${postId}/community?communityId=${communityId}`);
  return response.data.data;
};

export const postComment = async ({ postId, communityId, commentContent }: CommentData) => {
  const response = await axiosInstance.post(`comment/poster/${postId}/community?communityId=${communityId}`, {
    commentContent,
  });
  return response;
};

export const putComment = async ({ communityId, commentContent, commentId }: CommentData & { commentId: number }) => {
  const response = await axiosInstance.put(`comment/${commentId}/community?communityId=${communityId}`, {
    commentContent,
  });
  return response;
};

export const deleteComment = async ({ commentId, communityId }) => {
  const response = await axiosInstance.delete(`comment/${commentId}/community?communityId=${communityId}`);
  return response;
};
