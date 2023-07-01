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
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPw, setUserPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [failMsg, setFailMsg] = useState('');
  let regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const navigate = useNavigate();

  const onClickJoinHandler = async e => {
    e.preventDefault();

    /// 비밀번호 확인
    if (userPw !== confirmPw) {
      setFailMsg('비밀번호가 일치하지 않습니다.');
    } else if (!regex.test(userEmail)) {
      setFailMsg('유효한 이메일을 입력해주세요');
    } else {
      //DB에 저장, 로그인페이지로 이동
      try {
        await createUserWithEmailAndPassword(auth, userEmail, userPw);
        navigate('/login');
        const newUser = {
          userEmail,
          userName,
          uid: auth.currentUser.uid,
          photoUrl: '',
          userPw
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

  return (
    <FormContainer>
      <FormBox>
        <Logo src={LogoImagSrc}></Logo>
        <StForm onSubmit={e => onClickJoinHandler(e)}>
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
          {failMsg && <WarningMsg>{failMsg}</WarningMsg>}
          <JoinButton type="submit">회원가입</JoinButton>
        </StForm>

        <SocialLoginBox>
          {/* <JoinButton onClick={googleSignIn}>구글 아이디로 회원가입</JoinButton> */}

          <StLink to="/login">로그인하기</StLink>
        </SocialLoginBox>
      </FormBox>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 1200px;
  height: calc(100vh - 300px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StForm = styled.form`
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

const StInput = styled.input`
  width: 400px;
  height: 40px;
  font-size: 18px;
  padding: 3px 20px;
  border: none;
  border-radius: 8px;
  outline: none;
  box-shadow: rgba(18, 38, 58, 0.1) 0px 1px 3px 0px, rgba(18, 38, 58, 0.06) 0px 1px 2px 0px;
  &:focus {
    border: 2px solid #f8db5c;
  }
  &::placeholder {
    opacity: 0.4;
  }
`;

const StLink = styled(Link)`
  text-decoration-line: none;
  font-weight: 600;
  color: black;
`;

const JoinButton = styled.button`
  cursor: pointer;
  width: 400px;
  height: 40px;
  border-radius: 10px;
  background-color: #12263a;
  border: none;
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

// const Sthr = styled.hr`
// width: 100%;
// border: 1px solid rgba(0, 0, 0, 0.1);
// margin: 15px 0px;
// `;

const WarningMsg = styled.h3`
  color: red;
`;
export default Form;
