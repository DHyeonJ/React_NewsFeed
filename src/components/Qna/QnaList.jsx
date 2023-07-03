import React from 'react';
import { styled } from 'styled-components';

function QnaList({ inputValue, navigate, user, offset, posts }) {
  const goToWrite = () => {
    if (user.isLogin === 'guest') {
      alert('로그인이 필요합니다');
      navigate('/login');
    } else {
      navigate('/postWrite/1');
    }
  };
  return (
    <>
      <QPostWriteBox>
        <QPostWriteBtn onClick={goToWrite}>글쓰기</QPostWriteBtn>
      </QPostWriteBox>
      <QBoardAreaBox>
        <QTable>
          <colgroup>
            <col width="5%" />
            <col width="*" />
            <col width="50%" />
            <col width="*" />
            <col width="*" />
            <col width="*" />
          </colgroup>
          <thead>
            <QTHeadTr>
              <th>No</th>
              <th>작성자</th>
              <th>Title</th>
              <th>Date</th>
              <th>조회수</th>
            </QTHeadTr>
          </thead>
          <tbody>
            {posts
              .toSorted((a, b) => {
                const replaceA = a.date.replace(/[^0-9]/g, '');
                const replaceB = b.date.replace(/[^0-9]/g, '');
                return replaceA - replaceB;
              })
              .toReversed()
              .filter(post => {
                return post.category === '질문 게시판';
              })
              .filter(post => {
                if (inputValue) {
                  return post.title.includes(inputValue);
                } else {
                  return post;
                }
              })
              .map((post, i) => {
                if (post !== null && post.length !== 0) {
                  return (
                    <QTBodyTr
                      onClick={() => {
                        return navigate(`/detailPage/${post.id}`);
                      }}
                    >
                      <QTBodyTdNum>{i + 1}</QTBodyTdNum>
                      <QTBodyTdOther>{post.userEmail}</QTBodyTdOther>
                      <QTBodyTdTitle>{post.title}</QTBodyTdTitle>
                      <QTBodyTdOther>{post.date}</QTBodyTdOther>
                      <QTBodyTdOther>{post.views}</QTBodyTdOther>
                    </QTBodyTr>
                  );
                }
              })
              .slice(offset, offset + 10)}
          </tbody>
        </QTable>
      </QBoardAreaBox>
    </>
  );
}

export default QnaList;

const QPostWriteBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

const QPostWriteBtn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background-color: #12263a;
  &:hover {
    color: #f8db5c;
    font-weight: 600;
  }
`;

const QBoardAreaBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 12px;
`;

const QTable = styled.table`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const QTHeadTr = styled.tr`
  cursor: default;
  text-align: center;
  border-radius: 12px;
  margin: 10px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fafafa;
`;

const QTBodyTr = styled.tr`
  cursor: pointer;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
  height: 80px;
  margin: 10px 0;
  background-color: #fafafa;
`;

const QTBodyTdNum = styled.td`
  font-size: 20px;
  padding-top: 40px;
`;

const QTBodyTdOther = styled.td`
  font-size: 18px;
`;

const QTBodyTdTitle = styled.td`
  max-width: 600px;
  padding: 0 10px;
  font-size: 20px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;
