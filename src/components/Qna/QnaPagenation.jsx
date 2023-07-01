import React from 'react';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

function QnaPagenation({ filtered, setCurrentPage, totalPage }) {
  const handlePageChange = item => {
    setCurrentPage(item.selected + 1);
  };

  if (filtered !== null && filtered.length !== 0) {
    return (
      <QnaPaginate
        previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
        nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
        pageCount={totalPage}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    );
  }
}

export default QnaPagenation;

const QnaPaginate = styled(ReactPaginate).attrs({
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
