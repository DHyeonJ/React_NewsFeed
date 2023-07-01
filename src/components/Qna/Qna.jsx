import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import InputImgSrc from '../../assets/pet.png';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Qna() {
  const posts = useSelector(state => state.postDatas);
  const [inputValue, setInputValue] = useState('');
  const filtered = posts.filter(post => {
    return post.category === '질문 게시판';
  });

  // 현재페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 한 페이지에서 보일 posts 갯수
  const limit = 10;
  // (현재페이지에서 - 1 ) * limit  = 0
  const offset = (currentPage - 1) * limit;
  // 총 페이지
  const totalPage = Math.ceil(filtered.length / limit);

  const handlePageChange = item => {
    setCurrentPage(item.selected + 1);
  };
  const navigate = useNavigate();
  const user = useSelector(state => {
    return state.user;
  });
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
      <QSearch>
        <Input src={InputImgSrc}></Input>
        <QInput
          type="text"
          placeholder="입력하세요"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        ></QInput>
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
            </colgroup>
            <thead>
              <tr
                style={{
                  textAlign: 'center',
                  borderRadius: '12px',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                }}
              >
                <th>No</th>
                <th>작성자</th>
                <th>Title</th>
                <th>Date</th>
                <th>조회수</th>
              </tr>
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
                  return (
                    <tr
                      onClick={() => {
                        return navigate(`/detailPage/${post.id}`);
                      }}
                      style={{
                        cursor: 'pointer',
                        borderRadius: '12px',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        textAlign: 'center',
                        height: '80px'
                      }}
                    >
                      <td
                        style={{
                          fontSize: '20px',
                          paddingTop: '40px'
                        }}
                      >
                        {i + 1}
                      </td>
                      <td
                        style={{
                          fontSize: '20px'
                        }}
                      >
                        {post.userEmail}
                      </td>
                      <td
                        style={{
                          fontSize: '20px',
                          textAlign: 'left'
                        }}
                      >
                        {post.title}
                      </td>
                      <td
                        style={{
                          fontSize: '20px'
                        }}
                      >
                        {post.date}
                      </td>
                      <td
                        style={{
                          fontSize: '20px'
                        }}
                      >
                        {post.views}
                      </td>
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
          // marginPagesDisplayed={3}
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
  border-radius: 15px;
  width: 560px;
  height: 60px;
  margin-top: 40px;
  margin-left: 5px;
  padding-left: 10px;
  text-align: center;
  font-size: 22px;
  border: 3px solid#A2BCE0;
  &:focus {
    outline: none;
    border: 3px solid#12263a;
  }
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
  width: 100%;
  height: 100%;
`;

const RPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active'
})`
  display: flex;
  gap: 20px;
  font-size: 20px;
  margin-top: 30px;
  justify-content: center;
  color: #12263a;
  cursor: pointer;

  a[aria-label='Previous page'],
  a[aria-label='Next page'] {
    background-color: #c5d8d1;
    color: #12263a;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    font-weight: 700;
    display: block;
    text-align: center;
    cursor: pointer;
  }
  li {
    color: #12263a;
    line-height: 30px;
    display: block;
    text-align: center;
  }
  li.active a {
    background-color: #12263a;
    color: #ffffff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    font-weight: 700;
    display: block;
    text-align: center;
  }

  li.disable,
  li.disabled a {
    cursor: default;
    display: none;
  }
`;
