import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <FInfo>
        © 2023{' '}
        <Link to="/" style={{ color: '#12263a' }}>
          Pinfo
        </Link>{' '}
        powered by &nbsp;
        <Link
          style={{ color: '#12263a' }}
          target="_blank"
          to="https://github.com/DHyeonJ/React_NewsFeed"
        >
          NbCamp-MapJo
        </Link>
      </FInfo>
    </>
  );
}

export default Footer;

const FInfo = styled.div`
  text-align: center;
  /* position: fixed;
  bottom: 0; */
`;
