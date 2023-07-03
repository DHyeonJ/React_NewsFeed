import React, { useState } from 'react';
import LogoImagSrc from '../../assets/logo2.png';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { FormBox, SocialLoginBox } from '../Login/Login';
import { addDoc, collection } from 'firebase/firestore';

function Form() {
  const [failMsg, setFailMsg] = useState('');
  const [inputValue, setInputValue] = useState('');
  let regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const navigate = useNavigate();

  const onClickJoinHandler = async e => {
    e.preventDefault();
    /// 비밀번호 확인
    if (inputValue.password !== inputValue.passwordConfirm) {
      setFailMsg('비밀번호가 일치하지 않습니다.');
    } else if (!regex.test(inputValue.email)) {
      setFailMsg('유효한 이메일을 입력해주세요');
    } else {
      //DB에 저장, 로그인페이지로 이동
      const { email, name, password } = inputValue;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Welcome!');
        navigate('/');
        const newUser = {
          userEmail: email,
          userName: name,
          uid: auth.currentUser.uid,
          photoUrl: '',
          userPw: password
        };

        const usersRef = collection(db, 'users');
        addDoc(usersRef, newUser);
      } catch (error) {
        // 회원가입 실패시
        if (error == 'FirebaseError: Firebase: Error (auth/email-already-in-use).') {
          setFailMsg('이미 존재하는 이메일입니다.');
        }
      }
    }
  };

  const onChange = event => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const inputCaption = (type, name) => ({
    type,
    name,
    placeholder: name,
    value: inputValue[name],
    onChange,
    required: 'required'
  });
  const types = [
    ['email', 'email'],
    ['text', 'name'],
    ['password', 'password'],
    ['password', 'passwordConfirm']
  ];
  return (
    <FormContainer>
      <FormBox>
        <Logo src={LogoImagSrc}></Logo>
        <JoinForm onSubmit={e => onClickJoinHandler(e)}>
          {types.map(type => {
            return <JoinInput {...inputCaption(type[0], type[1])}></JoinInput>;
          })}
          {failMsg && <WarningMsg>{failMsg}</WarningMsg>}
          <JoinButton type="submit">회원가입</JoinButton>
        </JoinForm>
        <SocialLoginBox>
          <LoginLink to="/login">로그인하기</LoginLink>
        </SocialLoginBox>
      </FormBox>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 440px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(120, 120, 120, 0.2) 0px 2px 8px 0px;
  background-color: #fafafa;
`;

const JoinInput = styled.input`
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

const LoginLink = styled(Link)`
  text-decoration-line: none;
  color: black;
  cursor: pointer;
  font-weight: 600;
`;

const JoinButton = styled.button`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  background-color: #12263a;
  cursor: pointer;
  outline: none;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  &:hover {
    color: #f8db5c;
    font-weight: 600;
  }
  &:focus {
    color: #f8db5c;
  }
`;
export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
`;

const WarningMsg = styled.h3`
  color: red;
`;
export default Form;
