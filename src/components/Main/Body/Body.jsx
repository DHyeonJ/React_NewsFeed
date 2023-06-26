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
    </BArea>
  );
}

export default Body;

const BArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Search = styled.div`
  width: 100%;
  height: 100%;
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
