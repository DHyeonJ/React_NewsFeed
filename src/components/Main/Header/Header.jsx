import React from 'react';
import { styled } from 'styled-components';
import LogoImgSrc from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HeaderBG>
      <Logo src={LogoImgSrc}></Logo>
      <Menu>
        <StLink to="/">Home</StLink>
        <StLink to="/boast">자랑게시판</StLink>
        <StLink to="/qna">질문게시판</StLink>
      </Menu>
      <MyProfile>
        <ProfileImg></ProfileImg>
        <Login>
          <LoginLink to="/">회원가입</LoginLink>
          <LoginLink to="/">Login</LoginLink>
        </Login>
      </MyProfile>
    </HeaderBG>
  );
}

export default Header;
const HeaderBG = styled.div`
  background-color: #12263a;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.span`
  font-size: 25px;
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const StLink = styled(Link)`
  margin-left: 20px;
  color: #ffffff;
`;

const Login = styled.span`
  font-size: 20px;
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 15px;
  & span {
    margin-left: 15px;
  }
`;

const LoginLink = styled(Link)`
  margin-left: 15px;
  font-size: 15px;
  color: #ffffff;
`;

const MyProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background-img:; */
  border: 2px solid white;
`;
