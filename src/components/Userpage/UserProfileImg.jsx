import React from 'react';
import { styled } from 'styled-components';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, auth, db } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { updateDoc, doc } from 'firebase/firestore';
import { changePhoto } from '../../redux/modules/user';

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const updateImg = async file => {
    try {
      // 파일을 받아 스토리지에 저장
      const imageRef = ref(storage, `profileImg/${auth.currentUser.email}`);
      await uploadBytes(imageRef, file);
      // 스토리지에 저장된 파일의 url을 받아와 변수에 저장.
      const newImageRef = ref(storage, `profileImg/${auth.currentUser.email}`);
      const url = await getDownloadURL(newImageRef);
      // 받아온 url을 db users에 저장시킨다.
      const collectionRef = doc(db, 'users', user.docId);
      await updateDoc(collectionRef, { photoUrl: url });

      dispatch(changePhoto(url));
    } catch (error) {
      console.log(error);
    }
  };

  const handleImgUpload = event => {
    updateImg(event.target.files[0]);
  };

  return (
    <FileBox>
      <ProfileImg profileimg={user.photoURL} />
      <FileLabel>
        프로필 사진 변경
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          name="img"
          style={{ display: 'none' }}
          onChange={handleImgUpload}
        />
      </FileLabel>
    </FileBox>
  );
}

const ProfileImg = styled.img`
  width: 240px;
  height: 240px;

  border: 1px solid;
  border-radius: 100%;
  background-image: url(${props => props.profileimg});
  background-size: cover;
  background-position: center;
`;
const FileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FileLabel = styled.label`
  width: 140px;
  height: 40px;

  margin-top: 20px;
  padding: 7px;

  font-size: 16px;
  text-align: center;
  color: #ffffff;

  background-color: #12263a;
  border: 0.5px solid #dcdcdc;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #c5d8d1;
  }
`;

export default UserProfile;
