import React from 'react';
import { styled } from 'styled-components';

function CommentsList() {
  return (
    <>
      <Comment>
        <div>
          <CommentWriter>작성자 1</CommentWriter>
          <p>작성자 1의 댓글 내용 ...</p>
          <CommentTime>2023/6/25 12:12:12</CommentTime>
        </div>
        <DeleteBtn>삭제하기</DeleteBtn>
      </Comment>
      <Comment>
        <div>
          <CommentWriter>작성자 1</CommentWriter>
          <p>
            작성자 1의 댓글 내용 ... 작성자 1의 댓글 내용 ...작성자 1의 댓글 내용 ...작성자 1의 댓글
            내용 ...작성자 1의 댓글 내용 ...작성자 1의 댓글 내용 ...작성자 1의 댓글 내용 ...작성자
            1의 댓글 내용 ...작성자 1의 댓글 내용 ...작성자 1의 댓글 내용 ...작성자 1의 댓글 내용
            ...작성자 1의 댓글 내용 ...작성자 1의 댓글 내용 ...작성자 1의 댓글 내용 ...작성자 1의
            댓글 내용 ...
          </p>
          <CommentTime>2023/6/25 12:12:12</CommentTime>
        </div>
        <DeleteBtn>삭제하기</DeleteBtn>
      </Comment>
    </>
  );
}

export default CommentsList;

const CommentTime = styled.p`
  margin-top: 5px;
  font-size: 13px;
  color: #a99d9d;
`;
const Comment = styled.div`
  background-color: #12263a;
  color: white;
  padding: 20px;
  margin: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const CommentWriter = styled.p`
  font-size: 20px;
  margin-bottom: 8px;
`;

const DeleteBtn = styled.button`
  min-width: 70px;
  height: 40px;
  float: right;
  border-radius: 5px;
  margin-left: 15px;
  background-color: white;
  &:hover {
    background-color: #f8db5c;
    font-weight: 600;
  }
`;
