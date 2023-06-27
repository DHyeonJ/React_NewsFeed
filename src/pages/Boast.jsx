import React from 'react';
import Header from '../components/Main/Header/Header';
import Footer from '../components/Main/Footer/Footer';
import { styled } from 'styled-components';
import InputImgSrc from '../assets/pet.png';
import { Link } from 'react-router-dom';

function Boast() {
  return (
    <>
      <Header />
      <Search>
        <Input src={InputImgSrc}></Input>
        <Keyword type="text" placeholder="입력하세요"></Keyword>
      </Search>
      <StLayout>
        <PostWrite>
          <PostWriteLink to="/postWrite">글쓰기</PostWriteLink>
        </PostWrite>
        <FeedContainer>
          <BoastPost>
            <PostImg>이미지</PostImg>
            <PostInfo>
              <PostWriter>작성자</PostWriter>
              <p>글 제목</p>
            </PostInfo>
          </BoastPost>
          <BoastPost>
            <PostImg>이미지</PostImg>
            <PostInfo>
              <PostWriter>작성자</PostWriter>
              <p>글 제목</p>
            </PostInfo>
          </BoastPost>
          <BoastPost>
            <PostImg>이미지</PostImg>
            <PostInfo>
              <PostWriter>작성자</PostWriter>
              <p>글 제목</p>
            </PostInfo>
          </BoastPost>
          <BoastPost>
            <PostImg>이미지</PostImg>
            <PostInfo>
              <PostWriter>작성자</PostWriter>
              <p>글 제목</p>
            </PostInfo>
          </BoastPost>
        </FeedContainer>
      </StLayout>
      <Footer />
    </>
  );
}

export default Boast;
const PostWrite = styled.div`
  height: 30px;
  margin-bottom: 5px;
`;

const PostWriteLink = styled(Link)`
  margin-left: 1100px;
  border: 3px solid #12263a;
  padding: 5px 10px 5px 10px;
  color: white;
  background-color: #12263a;
  border-radius: 5px;
`;

const PostImg = styled.div`
  width: 570px;
  height: 300px;
  background-color: white;
  margin-bottom: 10px;
`;

const PostInfo = styled.div`
  width: 570px;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const PostWriter = styled.p`
  width: 120px;
  height: 50px;
  border-right: 2px solid #12263a;
  text-align: center;
`;

const BoastPost = styled.div`
  width: 570px;
  height: 370px;
  /* background-color: white; */
`;

const StLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

const FeedContainer = styled.div`
  width: 1200px;
  height: 840px;
  background-color: #12263a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Search = styled.div`
  width: 100%;
  margin-bottom: 70px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Input = styled.img`
  width: 182px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Keyword = styled.input`
  border: 3px solid#f4d1ae;
  border-radius: 15px;
  width: 560px;
  height: 60px;
  margin-top: 40px;
  margin-left: 5px;
  padding-left: 10px;
  text-align: center;
`;
