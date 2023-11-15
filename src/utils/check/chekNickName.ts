export const chekNickName = (nickName:string) => {
  const nickNameRegx = /^[a-zA-Z0-9가-힣]{1,20}$/;
  const testNickName = nickNameRegx.test(nickName);
  if (testNickName) {
    return '유효한 닉네임입니다.';
	} else {
		return '닉네임은 한글, 영문 대소문자를 사용할 수 있고, 최대 20자까지 가능합니다';
	}
};
