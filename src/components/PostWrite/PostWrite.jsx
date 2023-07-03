import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Select from './Select';
import { useSelector } from 'react-redux';
import { db, storage } from '../../firebase';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import currentTime from '../../feature/currentTime';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import uuid from 'react-uuid';

function PostWrite() {
  const [fileName, setFileName] = useState('');
  const user = useSelector(state => state.user);
  const param = useParams();
  const post = useSelector(state => {
    const matchPost = state.postDatas.find(doc => doc.id === param.id);
    return matchPost;
  });

  const [postContent, setPostContent] = useState({
    title: '',
    content: ''
  });
  useEffect(() => {
    if (param.id !== '1') {
      setPostContent({
        title: post.title,
        content: post.content
      });
    }
  }, []);

  const navigate = useNavigate();

  const cancelWrite = () => {
    navigate(-1);
  };

  const fileHandler = ({ target }) => {
    const name = target.value.split('/').pop().split('\\').pop();
    setFileName(name);
  };

  const onSubmitHandler = async e => {
    try {
      e.preventDefault();
      const { category = 0, title = 1, content = 2, img = 3 } = e.target;
      if (category.value === '0') {
        alert('카테고리를 선택해 주세요');
        return false;
      } else if (title.value === '') {
        alert('제목을 입력해 주세요');
        return false;
      } else if (content.value === '') {
        alert('내용을 입력해 주세요');
        return false;
      }

      const imageRef = ref(storage, `postImg/${user.uid}/${uuid()}`);
      await uploadBytes(imageRef, img.files[0]);
      const imgUrl = await getDownloadURL(imageRef);

      const newPost = {
        category: category.value,
        userName: user.userName,
        title: title.value,
        content: content.value,
        date: currentTime(),
        img: img.files[0] === undefined ? null : imgUrl,
        userEmail: user.email,
        views: 0,
        uid: user.uid
      };

      const collectionRef = collection(db, 'posts');
      await addDoc(collectionRef, newPost);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const onEditSubmitHandler = async e => {
    try {
      e.preventDefault();
      const { category = 0, title = 1, content = 2, img = 3 } = e.target;
      if (category.value === '0') {
        alert('카테고리를 선택해 주세요');
        return false;
      } else if (title.value === '') {
        alert('제목을 입력해 주세요');
        return false;
      } else if (content.value === '') {
        alert('내용을 입력해 주세요');
        return false;
      }

      const imageRef = ref(storage, `postImg/${user.uid}/${uuid()}`);
      await uploadBytes(imageRef, img.files[0]);
      const imgUrl = await getDownloadURL(imageRef);

      const changedPost = {
        category: category.value,
        userName: user.userName,
        title: title.value,
        content: content.value,
        date: post.date,
        userEmail: user.email,
        uid: user.uid
      };

      const collectionRef = doc(db, 'posts', post.id);
      await updateDoc(collectionRef, {
        img: img.files[0] ? imgUrl : post.img,
        ...changedPost
      });

      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostWriteForm onSubmit={param.id === '1' ? onSubmitHandler : onEditSubmitHandler}>
      <FormHeaderBox>
        <Select />
        <TitleInput
          placeholder="제목을 입력하세요"
          name="title"
          value={postContent.title}
          onChange={({ target }) => setPostContent({ title: target.value })}
        ></TitleInput>
      </FormHeaderBox>
      <ContentTextarea
        placeholder="내용을 입력하세요"
        name="content"
        value={postContent.content}
        onChange={({ target }) => setPostContent({ content: target.value })}
        rows="30"
        cols="118"
      ></ContentTextarea>
      <FormBottomBox>
        <FileFieldBox>
          <FileLabel>
            파일 추가하기
            <input
              type="file"
              accept="image/gif, image/jpeg, image/png"
              name="img"
              style={{ display: 'none' }}
              onChange={fileHandler}
            />
          </FileLabel>
          <FileSpan>{fileName}</FileSpan>
        </FileFieldBox>
        <ButtonBox>
          {param.id === '1' ? (
            <>
              <Button type="submit">작성하기</Button>
              <Button onClick={cancelWrite} type="button">
                취소하기
              </Button>
            </>
          ) : (
            <>
              <Button type="submit">수정하기</Button>
              <Button onClick={cancelWrite} type="button">
                취소하기
              </Button>
            </>
          )}
        </ButtonBox>
      </FormBottomBox>
    </PostWriteForm>
  );
}

export default PostWrite;

const FormHeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
const ButtonBox = styled.div`
  margin-left: 100px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  margin-left: 10px;
  background-color: #12263a;
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    color: #f8db5c;
  }
`;
const FileFieldBox = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const FileSpan = styled.span`
  padding: 0 10px;
  border-right: 0.5px solid #dcdcdc;
`;
const FormBottomBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 50px;
`;
const FileLabel = styled.label`
  cursor: pointer;
  text-align: center;
  padding-top: 7px;
  width: 140px;
  height: 40px;
  border: 0.5px solid #dcdcdc;
  background-color: #fafafa;
  &:hover {
    background-color: #c5d8d1;
  }
`;
const PostWriteForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 50px;
`;
const ContentTextarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 500px;
  padding: 20px;
  font-size: 18px;
  outline: none;
  border: 0.5px solid #dcdcdc;
`;
const TitleInput = styled.input`
  width: 85%;
  height: 60px;
  padding: 3px 20px;
  font-size: 20px;
  border: none;
  border-bottom: 0.5px solid #dcdcdc;
  outline: none;
`;
