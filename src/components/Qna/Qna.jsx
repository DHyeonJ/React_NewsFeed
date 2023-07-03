import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import QnaSearch from './QnaSearch';
import QnaList from './QnaList';
import QnaPagenation from './QnaPagenation';

function Qna() {
  const posts = useSelector(state => state.postDatas);
  const [inputValue, setInputValue] = useState('');
  const filtered = posts.filter(post => {
    return post.category === '질문 게시판' && post.title.includes(inputValue);
  });
  // 현재페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 한 페이지에서 보일 posts 갯수
  const limit = 10;
  // (현재페이지에서 - 1 ) * limit  = 0
  const offset = (currentPage - 1) * limit;
  // 총 페이지
  const totalPage = Math.ceil(filtered.length / limit);
  const navigate = useNavigate();
  const user = useSelector(state => {
    return state.user;
  });

  return (
    <>
      <QnaSearch inputValue={inputValue} setInputValue={setInputValue} />
      <QnaLayoutBox>
        <QnaList
          inputValue={inputValue}
          navigate={navigate}
          posts={posts}
          user={user}
          offset={offset}
        />
      </QnaLayoutBox>
      <QnaPagenation filtered={filtered} setCurrentPage={setCurrentPage} totalPage={totalPage} />
    </>
  );
}

export default Qna;

const QnaLayoutBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 530px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;
