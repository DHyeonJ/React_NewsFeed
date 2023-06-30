import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterLayout>
      <FootertParagraph>
        © 2023 &nbsp;
        <FooterLink to="/">Pinfo &nbsp;</FooterLink>
        powered by &nbsp;
        <FooterLink target="_blank" to="https://github.com/DHyeonJ/React_NewsFeed">
          NbCamp-MapJo
        </FooterLink>
      </FootertParagraph>
    </FooterLayout>
  );
}

export default Footer;

const FooterLayout = styled.footer`
  display: flex;
  justify-content: center;
  height: 150px;
  margin-top: 60px;
  color: #fff;
  background-color: #12263a;
`;
const FootertParagraph = styled.p`
  margin-top: 40px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  font-weight: 600;
`;
