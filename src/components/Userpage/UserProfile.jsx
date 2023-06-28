import React, { useState } from 'react';
import { styled } from 'styled-components';
import PostContainer from './PostContainer';

const ProfileImg = styled.div`
  width: 240px;
  height: 240px;
  border: 1px solid;
  border-radius: 50%;
  display: inline-flex;
`;

const FileInput = styled.input`
  width: 120px;
`;

function UserProfile() {
  const [profileImg, setProfileImg] = useState()

  const handleImgUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload =
  }
  return (
    <div>
      <ProfileImg />
      <FileInput type="file" accept="image/jpg, image/jpeg, image/png" onChange={handleImgUpload} />
      <PostContainer />
      <PostContainer />
    </div>
  );
}

export default UserProfile;
