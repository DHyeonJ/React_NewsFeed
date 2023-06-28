import React from 'react';
import { styled } from 'styled-components';

const ProfileImg = styled.div`
  width: 240px;
  height: 240px;
  border: 1px solid;
  border-radius: 50%;
`;

const ProfileInfo = styled.div`
  width: 700px;
  height: 262px;
  border: 1px solid;
`;

function UserProfile() {
  return (
    <div>
      <ProfileImg />
      <ProfileInfo />
      <ProfilePost />
    </div>
  );
}

export default UserProfile;
