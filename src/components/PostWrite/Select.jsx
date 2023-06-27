import React, { useState } from 'react';
import { styled } from 'styled-components';

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const isOpenHandler = () => {
    setIsOpen(true);
  };
  const selectOption = ({ target }) => {
    target.value === 1 ? setValue('자랑 게시판') : setValue('질문 게시판');
    setIsOpen(false);
  };
  return (
    <>
      <StSelect onClick={isOpenHandler} onBlur={() => setIsOpen(false)} type="button">
        {value ? value : '게시판 선택'}
      </StSelect>
      {isOpen && (
        <StyledSelect>
          <StyledOptoin
            value={1}
            onMouseDown={e => {
              e.preventDefault();
            }}
            onClick={selectOption}
          >
            자랑 게시판
          </StyledOptoin>
          <StyledOptoin
            value={2}
            onMouseDown={e => {
              e.preventDefault();
            }}
            onClick={selectOption}
          >
            질문 게시판
          </StyledOptoin>
        </StyledSelect>
      )}
    </>
  );
};

export default Select;

const StyledSelect = styled.ul`
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 0;
  width: 160px;
  border: 0.5px solid #dcdcdc;
  border-radius: 8px;
`;
const StyledOptoin = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #fff;
  &:hover {
    background-color: #C5D8D1;
  }
  &:first-child{
    border-radius: 8px 8px 0 0;
  }
  &:last-child{
    border-radius: 0 0 8px 8px;
  }
`;
const StSelect = styled.button`
  cursor: pointer;
  width: 160px;
  height: 40px;
  font-weight: 600;
  border: 0.5px solid #dcdcdc;
  border-radius: 8px;
  background-color: #fff;
  &:hover{
    background-color: #C5D8D1;
  }
`;
