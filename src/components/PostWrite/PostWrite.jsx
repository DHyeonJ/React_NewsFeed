import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Select from './Select';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../firebase';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { getAllPost } from '../../redux/modules/posts';
import currentTime from '../../feature/currentTime';

function PostWrite() {
  const [fileName, setFileName] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => {
    return state.user;
  });
  const navigate = useNavigate();
  const cancelWrite = () => {
    navigate(-1);
  };
  const fileHandler = async ({ target }) => {
    const name = target.value.split('/').pop().split('\\').pop();
    setFileName(name);
  };
  const onSubmitHandler = async e => {
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
    const newPost = {
      category: category.value,
      title: title.value,
      content: content.value,
      date: currentTime(),
      img: img.value,
      userEmail: user.email
    };
    const collectionRef = collection(db, 'posts');
    await addDoc(collectionRef, newPost);
    navigate(-1);
    const q = query(collection(db, 'posts'));
    const quertSnapShot = await getDocs(q);
    const initialPosts = [];
    quertSnapShot.forEach(doc => {
      const post = {
        id: doc.id,
        ...doc.data()
      };
      initialPosts.push(post);
    });
    dispatch(getAllPost(initialPosts));
  };
  return (
    <StForm onSubmit={onSubmitHandler}>
      <FormHeader>
        <Select />
        <StInput placeholder="제목을 입력하세요" name="title"></StInput>
      </FormHeader>
      <StyledTextarea
        placeholder="내용을 입력하세요"
        name="content"
        rows="30"
        cols="118"
      ></StyledTextarea>
      <FormBottom>
        <FileField>
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
          <File>{fileName}</File>
        </FileField>
        <ButtonArea>
          <Button type="submit">작성하기</Button>
          <Button onClick={cancelWrite} type="button">
            취소하기
          </Button>
        </ButtonArea>
      </FormBottom>
    </StForm>
  );
}
export default PostWrite;
const FormHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
const ButtonArea = styled.div`
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
const FileField = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const File = styled.span`
  padding: 0 10px;
  border-right: 0.5px solid #dcdcdc;
`;
const FormBottom = styled.div`
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
  &:hover {
    background-color: #c5d8d1;
  }
`;
const StForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 50px;
`;
const StyledTextarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 500px;
  padding: 20px;
  font-size: 18px;
  outline: none;
  border: 0.5px solid #dcdcdc;
`;
const StInput = styled.input`
  width: 85%;
  height: 60px;
  padding: 3px 20px;
  font-size: 20px;
  border: none;
  border-bottom: 0.5px solid #dcdcdc;
  outline: none;
`;
