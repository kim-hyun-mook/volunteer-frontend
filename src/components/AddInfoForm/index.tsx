import { Input } from '@components/ui/Input';
import { useFormState } from '@hooks/form';
import useCreateUserAddInfo from '@hooks/queries/signup';
import { FormEvent } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`;
interface AddInfoFormProps {
  [key: string]: any;
}
const AddInfoForm = ({ initialData }: AddInfoFormProps) => {
  const { postFormData, setPostFormData, handleChange } = useFormState(initialData);
  const { name, provider, email, nickname, phoneNumber, picture, role } = postFormData;
  const { mutate } = useCreateUserAddInfo();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const addInfoData = JSON.stringify({
      name,
      provider,
      email,
      nickname,
      phoneNumber,
      picture,
      role,
    });
    const signupDtoBlob = new Blob([addInfoData], { type: 'application/json' });
    setPostFormData({
      name: '',
      provider: '',
      email: '',
      nickname: '',
      phoneNumber: '',
      picture: '',
      role: '',
    });
    mutate(signupDtoBlob);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input labelText="이름" type="text" name="name" disabled value={name} onChange={handleChange} />
      <Input labelText="이메일" type="text" name="email" disabled value={email} onChange={handleChange} />
      <Input labelText="닉네임" type="text" name="nickname" value={nickname} onChange={handleChange} />
      <Input labelText="핸드폰 번호" type="text" name="phoneNumber" value={phoneNumber} onChange={handleChange} />
      <button>정보 추가하기</button>
    </Form>
  );
};

export default AddInfoForm;
