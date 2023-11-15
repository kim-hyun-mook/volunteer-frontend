export const checkPhoneNumber = (phoneNumber:string) => {
	const phoneNumberRegx = /^\d{3}(\d{3}|\d{4})\d{4}$/;
	const testPhoneNumber = phoneNumberRegx.test(phoneNumber)
	if (testPhoneNumber) {
		return '유효한 휴대폰 번호입니다.'
	} else {
		return '휴대폰 번호는 최소 10~ 최대11자리입니다.'
	}
}