import { Column } from 'react-table';
import { Data } from './MemberList';

export const memberColumns: Column<Data>[] = [
  {
    Header: '번호',
    accessor: 'id',
  },
  {
    Header: '로그인ID',
    accessor: 'loginId',
  },
  {
    Header: '이메일',
    accessor: 'email',
  },
  {
    Header: '프로필사진',
    accessor: 'profileImage',
    Cell: ({ value }: { value: string }) => (
      <img src={value} alt="프로필 사진" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
    ),
  },
  {
    Header: '이름',
    accessor: 'name',
  },
  {
    Header: '핸드폰번호',
    accessor: 'phoneNumber',
  },
  {
    Header: '회원역할',
    accessor: 'role',
  },
  {
    Header: '닉네임',
    accessor: 'nickname',
  },
];
