import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import LogoImgSrc from '../../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../redux/modules/user';
import { signOut } from 'firebase/auth';
import { auth, storage } from '../../../firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import time from '../../../assets/time.png';
function Header() {
  const user = useSelector(state => {
    return state.user;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(user.photoURL);

  useEffect(() => {
    setImageUrl(user.photoURL);
    console.log(user.photoURL);
  }, [user.photoURL]);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      dispatch(logoutUser());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HeaderBG>
      <h1>
        <Logo src={LogoImgSrc} onClick={() => navigate('/')}></Logo>
      </h1>
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
        <ProfileImg
          imageurl={imageUrl}
          onClick={() => {
            navigate('/userpage');
          }}
        ></ProfileImg>
        <Login>
          {user.isLogin === 'guest' && (
            <>
              <LoginLink to="/login">Login</LoginLink>
              <LoginLink to="/join">회원가입</LoginLink>
            </>
          )}
          {user.isLogin === 'member' && (
            <StyledLogOut onClick={logoutHandler}>로그아웃</StyledLogOut>
          )}
          {user.isLogin === 'wait' && <WaitLogin src={time} />}
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
  cursor: pointer;
  width: 80px;
  height: 80px;
  margin: 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;
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
const StyledLogOut = styled.p`
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: #f8db5c;
    font-weight: 500;
  }
`;
const Login = styled.span`
  width: 100px;
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
const WaitLogin = styled.img`
  width: 20px;
`;
const MyProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const ProfileImg = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
  /* background-image: url(${props => props.userimgurl ?? '../../../assets/defaultImg.png'}); */
  background-image: url(${props => props.imageurl});
  background-size: cover;
  background-position: center;
`;
