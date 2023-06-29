import React from 'react'
import { styled } from 'styled-components';

const Dots = () => {
  return (
    <DotsWrapper>
      <Dot />
      <Dot />
      <Dot />
    </DotsWrapper>
  )
}

export default Dots;

const Dot = styled.span`
  display: block;
  width: 3px;
  height: 3px;
  background-color: #555;
`
const DotsWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`