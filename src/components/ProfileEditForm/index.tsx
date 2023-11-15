import { Input } from '@components/ui/Input';
import * as S from './style';
interface ProfileProps {
  initialData: {
    nickName: string;
    phoneNum: string;
  };
}

const ProfileEditForm = ({ initialData }: ProfileProps) => {
	// const { formData, handleChange } = useProfileFormState(initialData);
	// const { validateStatus, validateMessage, validateNickName, validatePhoneNumber, profileFormRef } =useProfileValidation();
  return (
    <S.ProfileFormWrap>
      <div>{/* <Image/> */}</div>
      <S.ProfileForm>
        {/* <Input
          labelText="닉네임"
          type="text"
          placeholder="닉네임을 입력해주세요"
          name="nickName"
          value={formData.nickName}
          onChange={handleChange}
          ref={(ref) => profileFormRef('nickName', ref)}
          isValid={validateStatus.nickName}
					validateText={validateMessage.nickName}
					onBlur={validateNickName}
        />
        <Input
          labelText="휴대폰 번호"
          type="text"
          placeholder="전화번호를 입력해주세요"
          name="phoneNum"
          value={formData.phoneNum}
          onChange={handleChange}
          ref={(ref) => profileFormRef('phoneNum', ref)}
          validateText={validateMessage.phoneNum}
					isValid={validateStatus.phoneNum}
					onBlur={validatePhoneNumber}
        /> */}
      </S.ProfileForm>
    </S.ProfileFormWrap>
  );
};

export default ProfileEditForm;
