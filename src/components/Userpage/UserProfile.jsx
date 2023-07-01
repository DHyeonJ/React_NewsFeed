import UserProfileImg from './UserProfileImg';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

function UserProfile() {
  const { userName, email } = useSelector(state => state.user);

  return (
    <UserProfileBox>
      <UserProfileImg />
      <ul>
        <UserProfileParagraph>닉네임 : {userName}</UserProfileParagraph>
        <UserProfileParagraph>이메일 : {email}</UserProfileParagraph>
      </ul>
    </UserProfileBox>
  );
}
const UserProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1200px;
`;
const UserProfileParagraph = styled.li`
  margin: 24px 50px;
  font-size: 20px;
  font-weight: 800;
`;
export default UserProfile;
