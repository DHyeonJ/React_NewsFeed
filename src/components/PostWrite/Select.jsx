import React, { useState } from 'react';
import { styled } from 'styled-components';

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  const selectOption = () => {};
  return (
    <>
      <StSelect onClick={isOpenHandler} type='button'>게시판 선택</StSelect>
      {isOpen && (
        <StyledSelect>
          <StyledOptoin>자랑 게시판</StyledOptoin>
          <StyledOptoin>질문 게시판</StyledOptoin>
        </StyledSelect>
      )}
    </>
  );
};

export default Select;

const StyledSelect = styled.ul`
  cursor: pointer;
  position: absolute;
  top: 68px;
  left: 0;
  width: 180px;
  border: 1px solid;
`;
const StyledOptoin = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #fff;
`;
const StSelect = styled.button`
  width: 15%;
  height: 60px;
`;
