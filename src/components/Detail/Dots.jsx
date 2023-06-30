import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Dots = ({ param }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => {
    setIsOpen(true);
  };
  const navigate = useNavigate();
  return (
    <DotArea>
      <DotsWrapper onClick={isOpenHandler} onBlur={() => setIsOpen(false)}>
        <Dot />
        <Dot />
        <Dot />
      </DotsWrapper>
      {isOpen && (
        <Options>
          <Option onMouseDown={() => navigate(`/postWrite/${param.id}`)}>수정</Option>
          <Option>삭제</Option>
        </Options>
      )}
    </DotArea>
  );
};

export default Dots;

const Option = styled.li`
  text-align: center;
  padding: 5px;
  font-size: 15px;
  &:hover {
    background-color: #dcdcdc;
  }
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;
const Options = styled.ul`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 40px;
  width: 50px;
  border: 0.5px solid #dcdcdc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Dot = styled.span`
  display: block;
  width: 3px;
  height: 3px;
  background-color: #555;
`;
const DotsWrapper = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 40px;
  height: 40px;
  border: none;
  margin-right: 10px;
  background-color: #fff;
`;
const DotArea = styled.div`
  position: relative;
`;
