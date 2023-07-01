import React, { useState } from 'react';
import { styled } from 'styled-components';

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);
  const isOpenHandler = () => {
    setIsOpen(true);
  };

  const selectOption = ({ target }) => {
    target.value === 1 ? setValue('자랑 게시판') : setValue('질문 게시판');
    setIsOpen(false);
  };

  return (
    <>
      <SelectButton
        onClick={isOpenHandler}
        onBlur={() => setIsOpen(false)}
        name="category"
        type="button"
        value={value}
      >
        {value ? value : '게시판 선택'}
      </SelectButton>
      {isOpen && (
        <SelectList>
          <SelectItem
            value={1}
            onMouseDown={e => {
              e.preventDefault();
            }}
            onClick={selectOption}
          >
            자랑 게시판
          </SelectItem>
          <SelectItem
            value={2}
            onMouseDown={e => {
              e.preventDefault();
            }}
            onClick={selectOption}
          >
            질문 게시판
          </SelectItem>
        </SelectList>
      )}
    </>
  );
};

export default Select;

const SelectList = styled.ul`
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 0;
  width: 160px;
  border: 0.5px solid #dcdcdc;
  border-radius: 8px;
`;
const SelectItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #fff;
  &:hover {
    background-color: #c5d8d1;
  }
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;
const SelectButton = styled.button`
  cursor: pointer;
  width: 160px;
  height: 40px;
  font-weight: 600;
  border: 0.5px solid #dcdcdc;
  border-radius: 8px;
  background-color: #fff;
  &:hover {
    background-color: #c5d8d1;
  }
`;
