import React, { useEffect, useState } from 'react';
import Header from '../Main/Header/Header';
import { styled } from 'styled-components';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/modules/user';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };
  // useEffect(() => {
  // }, [])

  const onSubmitHandler = async e => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert('환영합니다');
      dispatch(loginUser({ email, password }));
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
    <>
      <Header></Header>
      <main>
        <StyledLoginWrapper>
          <div>
            <StyledLoginForm onSubmit={onSubmitHandler}>
              <StyledInput
                type="text"
                name="email"
                placeholder="이메일"
                value={email}
                onChange={onChangeHandler}
              />
              <StyledInput
                type="password"
                name="password"
                placeholder="비밀번호"
                value={password}
                onChange={onChangeHandler}
              />
              <StyledButtonWrapper>
                <StyledButton>로그인</StyledButton>
                <StyledButton>회원가입</StyledButton>
              </StyledButtonWrapper>
            </StyledLoginForm>
            <StyledSocialLoginForm onSubmit={onSubmitHandler}>
              <StyledButton>구글로 로그인</StyledButton>
              <StyledButton>깃허브로 로그인</StyledButton>
            </StyledSocialLoginForm>
          </div>
        </StyledLoginWrapper>
      </main>
    </>
  );
};

export default Login;

const StyledLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: calc(100vh - 100px);
  margin: 0 auto;
  border: 1px solid;
`;
const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 440px;
  padding: 20px;
  border: 1px solid;
  border-radius: 12px;
`;
const StyledInput = styled.input`
  width: 400px;
  height: 40px;
  padding: 3px 20px;
  border-radius: 8px;
`;
const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  color: #fff;
  border-radius: 8px;
  background-color: #12263a;
  &:hover {
    color: #12263a;
    font-weight: 600;
    background-color: #06bcc1;
  }
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const StyledSocialLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;
