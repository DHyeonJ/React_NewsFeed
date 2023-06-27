import React from 'react';
import { styled } from 'styled-components';

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 1080px;
  border: 1px solid;
`;
