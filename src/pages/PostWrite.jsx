import React from 'react';
import Header from '../components/Main/Header/Header';
import { styled } from 'styled-components';

function PostWrite() {
  return (
    <>
      <Header />
      <StLayout>
        <StInputTitle>
          <form>
            <StSelect>
              <option>자랑게시판</option>
              <option>질문게시판</option>
            </StSelect>
            <StInput placeholder="제목을 입력하세요"></StInput>
          </form>
        </StInputTitle>
        <div>
          <textarea placeholder="내용을 입력하세요" rows="50" cols="117"></textarea>
        </div>
        <input type="file"></input>
        <div>
          <button>작성하기</button>
          <button>작성하기</button>
        </div>
      </StLayout>
    </>
  );
}

export default PostWrite;
const StInputTitle = styled.div`
  display: flex;
  width: 1200px;
  height: 103px;
`;
const StSelect = styled.select`
  width: 200px;
  height: 60px;
`;
const StInput = styled.input`
  width: 1000px;
  height: 60px;
`;

const StLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
