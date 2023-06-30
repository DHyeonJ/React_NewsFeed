import React from 'react';
import { styled } from 'styled-components';
import InputImgSrc from '../../../assets/pet.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Body() {
  const posts = useSelector(state => state.postDatas);
  const navigate = useNavigate();
  const orderedDate = posts
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .reverse()
    .slice(0, 5);

  const hitPosts = posts
    .sort((a, b) => a.views - b.views)
    .reverse()
    .slice(0, 5);
  // 이미지 감싸는 border-radius,div 크기 고정 max/min, border속성
  return (
    <BArea>
      <Search>
        <Input src={InputImgSrc}></Input>
        <Keyword type="text" placeholder="입력하세요"></Keyword>
      </Search>
      <article>
        {/* 인기게시글 */}
        <StSection>
          <h2>인기 게시글</h2>
          <DivMap>
            {hitPosts.map(post => {
              return (
                <StContent
                  onClick={() => {
                    return navigate(`/detailPage/${post.id}`);
                  }}
                >
                  <Div>
                    <DivImg src={post.img}></DivImg>
                  </Div>
                  <StTitle>{post.title}</StTitle>
                </StContent>
              );
            })}
          </DivMap>
        </StSection>
        {/* 최신 게시 글 */}
        <StSection>
          <h2>최신 게시글</h2>
          <DivMap>
            {orderedDate.map(post => {
              return (
                <StContent
                  onClick={() => {
                    return navigate(`/detailPage/${post.id}`);
                  }}
                >
                  <Div>
                    <DivImg src={post.img}></DivImg>
                  </Div>

                  <StTitle>{post.title}</StTitle>
                </StContent>
              );
            })}
          </DivMap>
        </StSection>
      </article>
    </BArea>
  );
}

export default Body;

const StContent = styled.div`
  width: 216px;
  height: 300px;
  border: 2px solid #f4d1ae;
  border-radius: 10px 10px 0 0;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StTitle = styled.p`
  font-size: 18px;
  text-align: center;
  padding: 20px 0;
  color: white;
  border-top: 2px solid #f4d1ae;
  width: 100%;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 234px;
  border-radius: 10px 10px 0 0;
`;
const DivMap = styled.div`
  display: flex;
  gap: 20px;
  /* padding: 0 20px; */
  align-items: center;
`;
const DivImg = styled.img`
  max-width: 200px;
  min-width: 150px;
  max-height: 200px;
  /* min-height: 150px; */
  border-radius: 10px 10px 0 0;
`;

const BArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Search = styled.div`
  width: 100%;
  margin-bottom: 100px;
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
  border-radius: 15px;
  width: 560px;
  height: 60px;
  margin-top: 40px;
  margin-left: 5px;
  padding-left: 10px;
  text-align: center;
  font-size: 22px;
  border: 3px solid#A2BCE0;
  &:focus {
    outline: none;
    border: 3px solid#12263a;
  }
`;

const StSection = styled.section`
  width: 1200px;
  background-color: #12263a;
  margin-bottom: 50px;
  display: flex;
  gap: 20px;
  padding: 20px;
  color: #ffffff;
  flex-direction: column;
  & h2 {
    font-size: 28px;
    font-weight: 600;
    line-height: 1.2;
  }
`;
