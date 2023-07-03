import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function ListScroll({ datas, type }) {
  const navigate = useNavigate();

  return (
    <ListScrollBox>
      {datas.map(data => {
        return (
          <MyPostCommentList key={data.id}>
            <Category>{data.category}</Category>
            <MyTitleComment onClick={() => navigate(`/detailPage/${data.postId}`)}>
              {type === 'post' ? data.title : data.comment}
            </MyTitleComment>
            <Time>{type === 'post' ? data.date : data.time}</Time>
          </MyPostCommentList>
        );
      })}
    </ListScrollBox>
  );
}

const ListScrollBox = styled.div`
  padding: 15px;
  height: 250px;
  overflow: auto;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MyPostCommentList = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 700px;
  margin: 10px auto auto auto;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fafafa;
`;
const Category = styled.p`
  padding: 10px;
  width: 100px;
  color: gray;
  text-align: center;
`;
const MyTitleComment = styled.p`
  width: 450px;
  padding: 10px;
  border-left: 1px solid #857575;
  &:hover {
    cursor: pointer;
  }
`;
const Time = styled.p`
  padding: 10px;
  font-size: 13px;
`;
export default ListScroll;
