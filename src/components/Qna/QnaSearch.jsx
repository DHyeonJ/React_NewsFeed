import React from 'react';
import { styled } from 'styled-components';
import InputImgSrc from '../../assets/pet.png';

function QnaSearch({ inputValue, setInputValue }) {
  return (
    <QSearchBox>
      <QInputImg src={InputImgSrc}></QInputImg>
      <QInput
        type="text"
        placeholder="입력하세요"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      ></QInput>
    </QSearchBox>
  );
}

export default QnaSearch;

const QSearchBox = styled.div`
  margin-bottom: 70px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const QInputImg = styled.img`
  width: 182px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const QInput = styled.input`
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
