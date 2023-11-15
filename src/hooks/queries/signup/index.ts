import { createUserAddInfo } from '@apis/auth/signup';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useCreateUserAddInfo = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation((userInfo: Blob) => createUserAddInfo(userInfo), {
    onSuccess: () => {
      navigate('/');
    },
  });
  return { mutate };
};
export default useCreateUserAddInfo;
