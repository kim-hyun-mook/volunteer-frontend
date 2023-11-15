import DefalutProfile from '@assets/images/default_profile_img.gif';
import * as S from './style';
import { Link } from 'react-router-dom';
const ProfileInfo = () => {
  return (
    <S.ProfileWrap>
      <S.ProfileTitle>내정보</S.ProfileTitle>
      <S.ProfileImgWrap>
        <S.ProfileImg src={DefalutProfile} alt="기본 프로필 이미지" />
      </S.ProfileImgWrap>
      <S.ProfileTextInfo>
        <S.UserNickName>test 님</S.UserNickName>
        <S.UserEmail>test@test.com</S.UserEmail>
      </S.ProfileTextInfo>
      <div>
        <S.ProfileEditButton>
          <Link to='edit'>
          프로필 수정
          </Link>
        </S.ProfileEditButton>
      </div>
    </S.ProfileWrap>
  );
};

export default ProfileInfo;
