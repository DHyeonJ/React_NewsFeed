import React from 'react';
import { styled } from 'styled-components';
import LogoImgSrc from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import MyProfile from './MyProfile';

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <h1>
        <Logo src={LogoImgSrc} onClick={() => navigate('/')}></Logo>
      </h1>
      <Nav />
      <MyProfile />
    </HeaderLayout>
  );
}

export default Header;

const HeaderLayout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: rgba(120, 120, 120, 0.2) 0px 2px 8px 0px;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 180px;
  height: 60px;
  margin: 10px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
