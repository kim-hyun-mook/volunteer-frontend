import Image from '@components/ui/Image'
import styled from 'styled-components'
export const ProfileWrap = styled.div`
  display: flex;
	position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
	padding-right: 110px;
  gap: 10px;
  &::after {
    content: '';
		position: absolute;
		top: 0;
		right: 0px;
    height: 978px;
    background-color: #E0E0E0;
		width: 1px;
  }
`;

export const ProfileTitle = styled.span`
font-size: 18px;
font-weight: 600;
`

export const ProfileImgWrap = styled.div`
width: 100px;
height: 100px;
margin: 0 auto;
border-radius: 50%;
overflow: hidden;

`

export const ProfileImg = styled(Image)`
width: 100%;
height: 100%;
object-fit: cover;
`

export const ProfileTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const UserNickName = styled.span`
font-size: 16px;
font-weight: 600;

`
export const UserEmail = styled.span`
  font-size: 14px;
  color: #383838;
  font-weight: 600;
`;

export const ProfileEditButton = styled.button`
  background-color: transparent;
  border: 2px solid #56C9B6;
	width: 150px;
	height: 50px;
	border-radius: 30px;
  color: #56C9B6;
  a {
    font-weight: 600;

  }
`;