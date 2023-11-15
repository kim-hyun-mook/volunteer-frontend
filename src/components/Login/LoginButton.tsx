import { useState } from 'react';
import * as S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLocalStorage } from '@utils/localStorage/localStorage';
import { login } from '@apis/auth/login';

interface LoginButtonProps {
  oauth: {
    [key: string]: any;
  };
  getLoading: (loading: boolean) => void;
}
const LoginButton = ({ oauth, getLoading }: LoginButtonProps) => {
  const [isLoading, setLoading] = useState(false);
  const pathName = useLocation().pathname;
  const isSignUpPage = pathName === '/signup';
  const navigate = useNavigate();
  const { oauthName, korName, bgColor, img } = oauth;
  const loginData = getLocalStorage(oauthName);
  const handleClick = () => {
    setLoading(true);
    getLoading(isLoading);
    if (isSignUpPage) {
      navigate('/signup/add');
      window.location.href = `${import.meta.env.VITE_SERVER_OAUTH2}oauth2/authorization/${oauthName}`;
    } else if (loginData) {
      login(loginData);
      navigate('/');
    }
  };

  return (
    <S.Button onClick={handleClick} color={bgColor} $fontColor={oauthName}>
      <S.ImgWrap>
        <S.Img src={img} alt={`${korName} 아이콘 `} />
      </S.ImgWrap>
      {korName}로 {isSignUpPage ? '가입' : '로그인'}하기
    </S.Button>
  );
};

export default LoginButton;
