import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import PostContainer from './PostContainer';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, auth, db } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { updateDoc, collection, doc } from 'firebase/firestore';
import { changePhoto } from '../../redux/modules/user';

const ProfileImg = styled.div`
  width: 240px;
  height: 240px;
  border: 1px solid;
  border-radius: 50%;
  display: inline-flex;
  background-image: url(${props => props.userimgurl});
  background-size: cover;
  background-position: center;
`;

const FileInput = styled.input`
  width: 120px;
`;

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(state => {
    return state.user;
  });
  const [profileImg, setProfileImg] = useState('');
  // const [tempImg, setTempImg] = useState(user.photoURL);
  useEffect(() => {
    const updateImg = async () => {
      const imageRef = ref(storage, `profileImg/${auth.currentUser.email}`);
      await uploadBytes(imageRef, profileImg);
      const newImageRef = ref(storage, `profileImg/${auth.currentUser.email}`);
      const url = await getDownloadURL(newImageRef);
      const collectionRef = doc(db, 'users', user.docId);
      await updateDoc(collectionRef, { photoUrl: url });
      dispatch(changePhoto(url));
    };
    // const renderImg = () => {
    //   setTempImg('user.photoURL');
    // };
    // renderImg();
    if (profileImg != '') updateImg();
  }, [profileImg]);

  const handleImgUpload = event => {
    setProfileImg(event.target.files[0]);
  };

  return (
    <div>
      <ProfileImg />
      <FileInput type="file" accept="image/jpg, image/jpeg, image/png" onChange={handleImgUpload} />
      {/* <PostContainer />
      <PostContainer /> */}
    </div>
  );
}

export default UserProfile;
