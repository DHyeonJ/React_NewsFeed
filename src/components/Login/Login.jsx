import React, { useState } from 'react';
import { Logo } from '../Join/Form';
import LogoImagSrc from '../../assets/logo2.png';
import { styled } from 'styled-components';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/modules/user';
import { db } from '../../firebase';
import { collection, getDocs, query, addDoc } from 'firebase/firestore';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const user = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };
  const goToJoin = () => {
    navigate('/join');
  };

  /////기존 유저 확인
  const userCheck = async user => {
    try {
      const q = query(collection(db, 'users'));
      const userSnapShot = await getDocs(q);
      const initialUsers = [];
      userSnapShot.forEach(doc => {
        const user = {
          id: doc.id,
          ...doc.data()
        };
        initialUsers.push(user);
      });
      const findUser = initialUsers.filter(userData => userData.uid == user.uid);
      if (findUser.length === 0) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //////구글 로그인/회원가입
  const googleSignIn = async e => {
    try {
      e.preventDefault();
      const provider = new GoogleAuthProvider();
      const data = await signInWithPopup(auth, provider);
      const userData = data.user;
      const check = await userCheck(userData);
      if (check) {
        const { email, displayName, uid, photoURL } = userData;
        const newUser = {
          userEmail: email,
          userName: displayName,
          uid,
          photoUrl: photoURL
        };
        const usersRef = collection(db, 'users');
        await addDoc(usersRef, newUser);
      }
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert('환영합니다');
      dispatch(loginUser({ password }));
      navigate('/');
    } catch (error) {
      const { code } = error;
      switch (code) {
        case 'auth/invalid-email':
          alert('이메일이 형식에 맞지 않습니다');
          break;
        case 'auth/configuration-not-found':
          alert('이메일을 다시 확인해 주세요');
          break;
        case 'auth/wrong-password':
          alert('비밀번호가 맞지 않습니다');
          break;
        default:
          alert('이메일 또는 비밀번호를 확인해 주세요');
          break;
      }
    }
  };
  return (
    <LoginLayout>
      <FormBox>
        <Logo src={LogoImagSrc}></Logo>
        <LoginForm onSubmit={onSubmitHandler}>
          <Input
            type="text"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={onChangeHandler}
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangeHandler}
          />
          <ButtonBox>
            <Button>로그인</Button>
          </ButtonBox>
        </LoginForm>
        <SocialLoginBox onSubmit={onSubmitHandler}>
          <Button onClick={googleSignIn}>구글로 로그인</Button>
          <StyledGoToJoin onClick={goToJoin}>회원가입</StyledGoToJoin>
        </SocialLoginBox>
      </FormBox>
    </LoginLayout>
  );
};

export default Login;

const LoginLayout = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 300px);
`;
export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 440px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(120, 120, 120, 0.2) 0px 2px 8px 0px;
  background-color: #fafafa;
`;
const Input = styled.input`
  width: 400px;
  height: 40px;
  font-size: 18px;
  padding: 3px 20px;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgba(18, 38, 58, 0.1) 0px 1px 3px 0px, rgba(18, 38, 58, 0.06) 0px 1px 2px 0px;
  &:focus {
    border: 2px solid #f8db5c;
  }
  &::placeholder {
    opacity: 0.4;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  border-radius: 10px;
  border: none;
  background-color: #12263a;
  &:hover {
    color: #f8db5c;
    font-weight: 600;
  }
  &:focus {
    color: #f8db5c;
  }
`;

export const SocialLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 40px;
`;
const StyledGoToJoin = styled.p`
  cursor: pointer;
  font-weight: 600;
`;
