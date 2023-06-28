import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import InputImgSrc from '../../assets/pet.png';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Qna() {
  const posts = useSelector(state => state.postDatas);
  // 현재페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 한 페이지에서 보일 posts 갯수
  const limit = 10;
  // (현재페이지에서 - 1 ) * limit  = 0
  const offset = (currentPage - 1) * limit;
  const totalPage = Math.floor(posts.length / limit);

  // const useEffect
  const handlePageChange = item => {
    setCurrentPage(item.selected + 1);
  };
  const navigate = useNavigate();
  const user = useSelector(state => {
    return state.user;
  });
  const goToWrite = () => {
    if (user.isLogin === false) {
      alert('로그인이 필요합니다');
      navigate('/login');
    } else {
      navigate('/postWrite');
    }
  };
  return (
    <>
      <QSearch>
        <Input src={InputImgSrc}></Input>
        <QInput type="text" placeholder="입력하세요"></QInput>
      </QSearch>
      <StLayout>
        <PostWrite>
          <PostWriteLink onClick={goToWrite}>글쓰기</PostWriteLink>
        </PostWrite>
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
              <tr>
                <th>No</th>
                <th>ID</th>
                <th>Title</th>
                <th>작성자</th>
                <th>Date</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody style={{ border: '1px solid #12263a' }}>
              {posts
                .filter(post => {
                  return post.category === '질문 게시판';
                })
                .map(post => {
                  return (
                    <tr
                      onClick={() => {
                        return navigate(`/detailPage/${post.id}`);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <td>1</td>
                      <td>{post.userEmail}</td>
                      <td>{post.title}</td>
                      <td>홍길동</td>
                      <td>{post.date}</td>
                      <td>3</td>
                    </tr>
                  );
                })
                .slice(offset, offset + 10)}
            </tbody>
          </Table>
        </BoardArea>
        <RPaginate
          previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
          nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
          pageCount={totalPage}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          onPageChange={handlePageChange}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </StLayout>
    </>
  );
}

export default Qna;

const PostWrite = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

const PostWriteLink = styled.button`
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

const QSearch = styled.div`
  margin-bottom: 70px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Input = styled.img`
  width: 182px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const QInput = styled.input`
  border: 3px solid#f4d1ae;
  border-radius: 15px;
  width: 560px;
  height: 60px;
  margin-top: 40px;
  margin-left: 5px;
  padding-left: 10px;
  text-align: center;
`;

const StLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;
const BoardArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Table = styled.table`
  width: 1200px;
  height: 840px;
  border: 2px solid #12263a;
`;

const RPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active'
})`
  display: flex;
  gap: 15px;
  font-size: 20px;
  justify-content: center;
  color: #12263a;
  cursor: pointer;

  li.previous a,
  li.next a {
    color: #06bcc1;
  }
  li.active a {
    color: #c5d8d1;
    font-weight: 700;
    min-width: 32px;
  }
  li.disabled a {
    color: gray;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
