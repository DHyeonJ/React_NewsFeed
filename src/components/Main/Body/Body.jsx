import React from 'react';
import { styled } from 'styled-components';
import InputImgSrc from '../../../assets/pet.png';

function Body() {
  return (
    <BArea>
      <Search>
        <Input src={InputImgSrc}></Input>
        <Keyword type="text" placeholder="입력하세요"></Keyword>
      </Search>
      <article>
        <StSection>
          <StContent>
            <DivImg>이미지</DivImg>
            <StTitle>제목</StTitle>
          </StContent>
        </StSection>
        <StSection></StSection>
      </article>
    </BArea>
  );
}

export default Body;

const StContent = styled.div`
  width: 250px;
  height: 300px;
  border: 2px solid #f4d1ae;
  border-radius: 10px 10px 0 0;
  text-align: center;
  /* background-color: #f4d1ae; */
`;
const StTitle = styled.p`
  font-size: 30px;
  text-align: center;
  padding-top: 30px;
  color: white;
`;

const DivImg = styled.div`
  width: 100%;
  border-radius: 10px 10px 0 0;
  height: 70%;
  background-color: #f4d1ae;
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
  border: 3px solid#f4d1ae;
  border-radius: 15px;
  width: 560px;
  height: 60px;
  margin-top: 40px;
  margin-left: 5px;
  padding-left: 10px;
  text-align: center;
`;

const StSection = styled.section`
  width: 1200px;
  height: 340px;
  background-color: #12263a;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
