import React from 'react';
import { styled } from 'styled-components';

function Form() {
  return (
    <CommentForm>
      <CommentInput placeholder="댓글을 입력하세요"></CommentInput>
      <CommentBtn>입력</CommentBtn>
    </CommentForm>
  );
}

export default Form;

const CommentForm = styled.form`
  width: 100%;
  height: 100px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CommentInput = styled.textarea`
  width: 500px;
  height: 70px;
  resize: none;
  border-radius: 8px;
  padding: 7px;
  box-shadow: rgba(18, 38, 58, 0.1) 0px 1px 3px 0px, rgba(18, 38, 58, 0.06) 0px 1px 2px 0px;
  &:focus {
    border: none;
    outline: 2px solid #f8db5c;
  }
`;

const CommentBtn = styled.button`
  width: 70px;
  height: 70px;
  background-color: #12263a;
  color: white;
  border-radius: 8px;
  margin-left: 20px;
  &:hover {
    color: #f8db5c;
    font-weight: 600;
  }
  &:focus {
    color: #f8db5c;
  }
`;
