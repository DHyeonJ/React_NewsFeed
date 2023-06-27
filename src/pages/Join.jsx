import React from 'react';
import Header from '../components/Main/Header/Header';
import Form from '../components/Join/Form';
import { styled } from 'styled-components';

const StContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 1080px;
`;

function join() {
  return (
    <>
      <Header></Header>
      <StContainer>
        <Form />
      </StContainer>
    </>
  );
}

export default join;
