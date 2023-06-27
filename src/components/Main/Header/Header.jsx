import React from 'react';
import { styled } from 'styled-components';
import LogoImgSrc from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../redux/modules/user';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => {
    return state.user;
  });
  // console.log(user);
  const logoutHandler = async () => {
    await signOut(auth);
    dispatch(logoutUser());
  };

  return (
    <HeaderBG>
      <Logo src={LogoImgSrc}></Logo>
      <StyledNav>
        <Menu>
          <li>
            <StLink to="/">Home</StLink>
          </li>
          <li>
            <StLink to="/boast">자랑게시판</StLink>
          </li>
          <li>
            <StLink to="/qna">질문게시판</StLink>
          </li>
        </Menu>
      </StyledNav>
      <MyProfile>
        <ProfileImg></ProfileImg>
        <Login>
          {user.isLogin ? (
            //
            <div onClick={logoutHandler}>로그아웃</div>
          ) : (
            <>
              <LoginLink to="/login">Login</LoginLink>
              <LoginLink to="/join">회원가입</LoginLink>
            </>
          )}
        </Login>
      </MyProfile>
    </HeaderBG>
  );
}

export default Header;
const HeaderBG = styled.header`
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

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  color: #fff;
  `;

const StLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  &:hover {
    color: #f8db5c;
    font-weight: 500;
  }
`;

const Login = styled.span`
  font-size: 20px;
  display: flex;
  color: #fff;
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
  color: #fff;
  &:hover {
    color: #f8db5c;
    font-weight: 500;
  }
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
