import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <FInfo>
        © 2023{' '}
        <Link to="/" style={{ color: '#12263a', fontWeight: '600' }}>
          Pinfo
        </Link>{' '}
        powered by &nbsp;
        <Link
          style={{ color: '#12263a', fontWeight: '600' }}
          target="_blank"
          to="https://github.com/DHyeonJ/React_NewsFeed"
        >
          NbCamp-MapJo
        </Link>
      </FInfo>
    </footer>
  );
}

export default Footer;

const FInfo = styled.div`
  height: 100px;
  padding-top: 60px;
  text-align: center;
  /* position: fixed;
  bottom: 0; */
`;
