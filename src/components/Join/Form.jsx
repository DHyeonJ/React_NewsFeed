import React, { useState } from 'react';
import LogoImagSrc from '../../assets/logo_white.png';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.form`
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StInput = styled.input`
  width: 460px;
  height: 40px;
  font-size: 20px;
  margin-bottom: 15px;
  border: 1px solid gray;
  border-radius: 8px;
  outline: none;
  &:focus {
    border: 2px solid #f8db5c;
  }
  &::placeholder {
    opacity: 0.4;
  }
`;

const StLink = styled(Link)`
  text-decoration-line: none;
  color: black;
`;

const JoinButton = styled.button`
  width: 400px;
  height: 45px;
  border-radius: 10px;
  background-color: #c5d8d1;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 800;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
`;

const Sthr = styled.hr`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 15px 0px;
`;

const WarningMsg = styled.h1`
  color: red;
`;

function Form() {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPw, setUserPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [failMsg, setFailMsg] = useState('');
  let regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const navigate = useNavigate();

  const onClickJoinHandler = function (e) {
    e.preventDefault();

    /// 비밀번호 확인
    if (userPw !== confirmPw) {
      setFailMsg('비밀번호가 일치하지 않습니다.');
    } else if (!regex.test(userEmail)) {
      setFailMsg('유효한 이메일을 입력해주세요');
    } else {
      //DB에 저장, 로그인페이지로 이동
      createUserWithEmailAndPassword(auth, userEmail, userPw)
        .then(userCredential => {
          // 회원가입 성공시
          navigate('/login');
        })
        .catch(error => {
          // 회원가입 실패시
          if (error == 'FirebaseError: Firebase: Error (auth/email-already-in-use).') {
            setFailMsg('이미 존재하는 이메일입니다.');
          }
        });
    }
  };

  return (
    <FormContainer onSubmit={e => onClickJoinHandler(e)}>
      <Logo src={LogoImagSrc}></Logo>

      <StInput
        value={userEmail}
        onChange={e => setUserEmail(e.target.value)}
        type="email"
        required
        placeholder="이메일"
      ></StInput>
      <StInput
        value={userName}
        onChange={e => setUserName(e.target.value)}
        type="text"
        required
        placeholder="이름"
      />
      <StInput
        type="password"
        value={userPw}
        minLength="8"
        required
        onChange={e => setUserPw(e.target.value)}
        placeholder="비밀번호"
      />
      <StInput
        type="password"
        value={confirmPw}
        required
        onChange={e => setConfirmPw(e.target.value)}
        placeholder="비밀번호 확인"
      />
      <WarningMsg>{failMsg}</WarningMsg>
      <JoinButton type="submit">회원가입</JoinButton>
      <Sthr></Sthr>
      <JoinButton>구글 아이디로 로그인</JoinButton>
      <StLink to="/login">로그인하기</StLink>
    </FormContainer>
  );
}

export default Form;
