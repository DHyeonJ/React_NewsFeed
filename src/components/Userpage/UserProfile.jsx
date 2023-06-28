import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import PostContainer from './PostContainer';
import { ref, uploadBytes } from 'firebase/storage';
import { storage, auth } from '../../firebase';

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
  const [profileImg, setProfileImg] = useState(null);

  useEffect(() => {
    const updateImg = async () => {
      const imageRef = ref(storage, `profileImg/${auth.currentUser.email}`);
      await uploadBytes(imageRef, profileImg);
    };
    if (profileImg !== null) updateImg();
  }, [profileImg]);

  const handleImgUpload = event => {
    setProfileImg(event.target.files[0]);
  };
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
