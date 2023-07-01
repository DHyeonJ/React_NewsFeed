import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../redux/modules/user';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import time from '../../../assets/time.png';

const MyProfile = () => {
  const user = useSelector(state => {
    return state.user;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState({});
  useEffect(() => {
    setImageUrl({url: user.photoURL});
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
    <MyProfileLayout>
      <MyProfileImg
        imageurl={imageUrl.url}
        onClick={() => {
          navigate('/userpage');
        }}
      ></MyProfileImg>
      <LoginBox>
        {user.isLogin === 'guest' && (
          <>
            <HeaderLink to="/login">Login</HeaderLink>
            <HeaderLink to="/join">Join</HeaderLink>
          </>
        )}
        {user.isLogin === 'member' && <LogOut onClick={logoutHandler}>로그아웃</LogOut>}
        {user.isLogin === 'wait' && <WaitLoginImg src={time} />}
      </LoginBox>
    </MyProfileLayout>
  );
};

export default MyProfile;

const MyProfileLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const MyProfileImg = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: 2px solid #12263a;
  border-radius: 50%;
  background-image: url(${props => props.imageurl});
  background-size: cover;
  background-position: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  font-size: 20px;
  color: #12263a;
  margin-right: 15px;
`;

const HeaderLink = styled(Link)`
  margin-left: 15px;
  color: #12263a;
  &:hover {
    color: #f8db5c;
    font-weight: 500;
  }
`;

const LogOut = styled.p`
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: #f8db5c;
    font-weight: 500;
  }
`;

const WaitLoginImg = styled.img`
  width: 20px;
`;
