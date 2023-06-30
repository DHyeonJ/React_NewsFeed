import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function PostContainer() {
  const loginUser = useSelector(state => state.user);
  const { uid, userName, email } = loginUser;

  const postDatas = useSelector(state => state.postDatas);
  const myPost = postDatas.filter(post => post.uid === uid);

  const commentDatas = useSelector(state => state.comments);
  const myComment = commentDatas.filter(comment => comment.uid === uid);

  const navigate = useNavigate();

  return (
    <div>
      <Layout>
        <UserProfile />
        <MyInfo>
          <p>닉네임 : {userName}</p>
          <MyInfoEmail>이메일 : {email}</MyInfoEmail>
        </MyInfo>
      </Layout>
      <div>
        <MyPostComment>
          <MyLabel>작성 글 목록</MyLabel>
        </MyPostComment>
        <ListScroll>
          {myPost
            .toSorted((a, b) => {
              const replaceA = a.date.replace(/[^0-9]/g, '');
              const replaceB = b.date.replace(/[^0-9]/g, '');
              return replaceB - replaceA;
            })
            .map(data => {
              return (
                <MyPostCommentList key={data.id}>
                  <Category>{data.category}</Category>
                  {/* 호버 포커스 */}
                  <MyTitleComment onClick={() => navigate(`/detailPage/${data.id}`)}>
                    {data.title}
                  </MyTitleComment>
                  <Time>{data.date}</Time>
                </MyPostCommentList>
              );
            })}
        </ListScroll>
      </div>
      <Bottom>
        <MyPostComment>
          <MyLabel>작성 댓글 목록</MyLabel>
        </MyPostComment>
        <ListScroll>
          {myComment
            .toSorted((a, b) => {
              const replaceA = a.time.replace(/[^0-9]/g, '');
              const replaceB = b.time.replace(/[^0-9]/g, '');
              return replaceB - replaceA;
            })
            .map(data => {
              return (
                <MyPostCommentList key={data.id}>
                  <Category>{data.category}</Category>
                  <MyTitleComment onClick={() => navigate(`/detailPage/${data.postId}`)}>
                    {data.comment}
                  </MyTitleComment>
                  <Time>{data.time}</Time>
                </MyPostCommentList>
              );
            })}
        </ListScroll>
      </Bottom>
    </div>
  );
}
const Bottom = styled.div`
  margin-bottom: 100px;
`;
const Time = styled.p`
  padding: 10px;
  font-size: 13px;
`;

const Category = styled.p`
  text-align: center;
  padding: 10px;
  width: 100px;
  color: gray;
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const MyInfo = styled.div`
  margin-left: 100px;
  margin-top: 100px;
  font-size: large;
`;
const MyInfoEmail = styled.p`
  margin-top: 20px;
`;
const MyPostComment = styled.div`
  width: 700px;
  height: 35px;
  color: white;
  background-color: #12263a;
  margin: 30px auto auto auto;
  text-align: center;
  position: relative;
`;
const MyLabel = styled.label`
  display: inline-block;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;
const MyPostCommentList = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 700px;
  margin: 10px auto auto auto;
  /* text-align: center; */
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const MyTitleComment = styled.p`
  width: 450px;
  padding: 10px;
  border-left: 1px solid #857575;
  &:hover {
    cursor: pointer;
  }
`;
const ListScroll = styled.div`
  padding: 15px;
  height: 250px;
  overflow: auto;
  width: 100%; //자동으로 설정된 값과 내가 설정한 값을 쓰는 것은 다르다.
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default PostContainer;
