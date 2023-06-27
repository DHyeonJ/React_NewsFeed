import React from 'react';
import { styled } from 'styled-components';
import pet2 from '../../assets/pet2.png';

function Contents() {
  return (
    <>
      <Section>
        <Title>
          <h3>제목</h3>
        </Title>
        <Content>내용</Content>
        <Img src={pet2}></Img>
      </Section>
    </>
  );
}

export default Contents;
const Img = styled.img`
  width: 100px;
  height: 200px;
  position: absolute;
  top: 0;
  right: -63px;
`;

const Title = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #12263a;
  margin-top: 40px;
`;
const Content = styled.div`
  width: 100%;
  height: 282px;
  border: 1px solid #12263a;
  margin-top: 40px;
`;

const Section = styled.section`
  position: relative;
`;
