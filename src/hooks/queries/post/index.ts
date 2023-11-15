import { PostData, createPost } from '@apis/post';
import { useMutation, useQueryClient } from 'react-query';

export const useCreatePost = () => {

  const queryCilent = useQueryClient();
	const { mutate } = useMutation(createPost, {
    onSuccess: () => {
      queryCilent.invalidateQueries('poster');
      
    },
  });

  const handleCreatePost = (postData:PostData) => {
    mutate(postData)
  }
  return { handleCreatePost };
};
