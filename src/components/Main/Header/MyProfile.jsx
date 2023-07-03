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
  const [imageUrl, setImageUrl] = useState({ url: '' });
  const defaultUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg8gsF4JtAjXwz-kiGjrOZeUOt3H5tvdc-HsEXfA&s';
  useEffect(() => {
    setImageUrl({ url: user.photoURL });
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
  console.log(imageUrl.url);
  return (
    <MyProfileLayout>
      {user.isLogin === 'member' && (
        <MyProfileImg
          imageurl={imageUrl.url == '' ? defaultUrl : imageUrl.url}
          onClick={() => {
            if (user.isLogin === 'guest') {
              alert('Login First!');
              navigate('/login');
            } else {
              navigate('/userpage');
            }
          }}
        />
      )}
      <LoginBox>
        {user.isLogin === 'guest' && (
          <>
            <HeaderLink to="/login">Login</HeaderLink>
            <HeaderLink to="/join">Join</HeaderLink>
          </>
        )}
        {user.isLogin === 'member' && <LogOut onClick={logoutHandler}>Log Out</LogOut>}
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

const MyProfileImg = styled.img`
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
  font-size: 21px;
  font-weight: 800;
  &:hover {
    color: #b54242;
    font-weight: 800;
  }
`;

const WaitLoginImg = styled.img`
  width: 20px;
`;
