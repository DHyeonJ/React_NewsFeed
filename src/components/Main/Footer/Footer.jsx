import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <FInfo>
        © 2023 <Link to="/">Pinfo</Link> powered by &nbsp;
        <Link target="_blank" to="https://github.com/DHyeonJ/React_NewsFeed">
          NbCamp-MapJo
        </Link>
      </FInfo>
    </>
  );
}

export default Footer;

const FInfo = styled.div`
  text-align: center;
`;
