import React from 'react';
import Header from '../components/Main/Header/Header';
import { styled } from 'styled-components';

function PostWrite() {
  return (
    <>
      <Header />
      <StLayout>
        <StForm>
          <StSelect>
            <option>자랑게시판</option>
            <option>질문게시판</option>
          </StSelect>
          <StInput placeholder="제목을 입력하세요"></StInput>
        </StForm>
        <textarea placeholder="내용을 입력하세요" rows="30" cols="118"></textarea>
        <PostBottom>
          <AddImg type="file"></AddImg>
          <ButtonArea>
            <Button>작성하기</Button>
            <Button>취소하기</Button>
          </ButtonArea>
        </PostBottom>
      </StLayout>
    </>
  );
}

export default PostWrite;
const ButtonArea = styled.div`
  margin-left: 100px;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 10px;
  background-color: #12263a;
  color: white;
  border-radius: 5px;
`;

const PostBottom = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
  width: 1150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`;

const AddImg = styled.input`
  width: 700px;
  height: 40px;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 1150px;
  height: 80px;
`;
const StSelect = styled.select`
  width: 200px;
  height: 60px;
`;
const StInput = styled.input`
  width: 100%;
  height: 60px;
`;

const StLayout = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
