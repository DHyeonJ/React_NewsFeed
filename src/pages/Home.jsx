import React from 'react';
import Header from '../components/Main/Header/Header';
import Body from '../components/Main/Body/Body';
import Footer from '../components/Main/Footer/Footer';
import { styled } from 'styled-components';

function Home() {
  return (
    <>
      <Header />
      <StContainer>
        <Body />
        <Footer />
      </StContainer>
    </>
  );
}

export default Home;

// styled-components
const StContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 1080px;
`;
