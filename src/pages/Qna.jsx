import React, { useState, useEffect } from 'react';
import Header from '../components/Main/Header/Header';
import Footer from '../components/Main/Footer/Footer';
import { styled } from 'styled-components';
// import Pagination from '../components/Pagination/Pagination';

function Qna() {
  const [contentInfo, setContentInfo] = useState([
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
    },
    {
      userId: 1,
      id: 5,
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
    }
  ]);
  const [page, setPage] = useState(1); // 페이지
  const limit = 10; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit;

  const postsData = posts => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  return (
    <>
      <Header />
      <QSearch>
        <QInput type="text" placeholder="입력하세요"></QInput>
      </QSearch>
      <BoardArea>
        <Table>
          <colgroup>
            <col width="5%" />
            <col width="*" />
            <col width="50%" />
            <col width="*" />
            <col width="*" />
            <col width="*" />
            <col width="*" />
          </colgroup>
          <thead>
            <InfoArea>
              <th>No</th>
              <th>ID</th>
              <th>Title</th>
              <th>Name</th>
              <th>Date</th>
              <th>조회수</th>
            </InfoArea>
          </thead>
          <tbody style={{ border: '1px solid #12263a' }}>
            {/* <Posts info={postsData(contentInfo)} /> */}
          </tbody>
        </Table>
      </BoardArea>
      <div>
        {/* <Pagination limit={limit} page={page} totalPosts={contentInfo.length} setPage={setPage} /> */}
      </div>
      <Footer />
    </>
  );
}

export default Qna;

const QSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const QInput = styled.input`
  width: 553px;
  height: 60px;
  border: 3px solid #f4d1ae;
  border-radius: 15px;
  margin-top: 40px;
  margin-left: 5px;
  padding-left: 10px;
  text-align: center;
`;

const BoardArea = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Table = styled.table`
  border: 1px solid #12263a;
  text-align: center;
  width: 1200px;
  height: 600px;
`;
const InfoArea = styled.tr`
  text-align: center;
  border: 1px solid #12263a;
`;

// const ReactPagination = styled(Pagination).attrs`
//   border: 1px solid #12263a;
//   width: 100px;
//   height: 100px;
// `;
// const Posts = styled.div``;
