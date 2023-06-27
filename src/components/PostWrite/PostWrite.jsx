import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Select from './Select';

function PostWrite() {
  const navigate = useNavigate();
  const cancelWrite = () => {
    navigate(-1);
  };
  return (
    <StLayout>
      <StForm>
        <Select />
        <StInput placeholder="제목을 입력하세요"></StInput>
      </StForm>
      <StyledTextarea placeholder="내용을 입력하세요" rows="30" cols="118"></StyledTextarea>
      <PostBottom>
        <AddImg type="file"></AddImg>
        <ButtonArea>
          <Button>작성하기</Button>
          <Button onClick={cancelWrite}>취소하기</Button>
        </ButtonArea>
      </PostBottom>
    </StLayout>
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`;

const AddImg = styled.input`
  /* width: ; */
  height: 40px;
`;

const StForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  border: 1px solid red;
`;
const StyledTextarea = styled.textarea`
  width: 100%;
`;
const StInput = styled.input`
  width: 85%;
  height: 60px;
`;
const StLayout = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px auto 0;
`;
