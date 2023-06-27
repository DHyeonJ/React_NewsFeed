import React from 'react';
import Header from '../components/Main/Header/Header';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

function PostWrite() {
  const navigate = useNavigate();
  const cancelWrite = () => {
    navigate(-1);
  };
  return (
    <>
      <Header />
      <Layout>
        <StLayout>
          <StForm>
            <StSelect>
              <option>자랑게시판</option>
              <option>질문게시판</option>
            </StSelect>
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
      </Layout>
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
  width: 100%;
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
  width: 100%;
  height: 80px;
`;
const StSelect = styled.select`
  width: 200px;
  height: 60px;
`;
const StyledTextarea = styled.textarea`
  width: 100%;
`;
const StInput = styled.input`
  width: 100%;
  height: 60px;
`;

const StLayout = styled.div`
  margin-top: 80px;
  width: 1200px;
  height: 100%;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
