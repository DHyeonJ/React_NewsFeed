import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import UserProfile from './UserProfile';
import ListScroll from './ListScroll';

function PostContainer() {
  const { uid } = useSelector(state => state.user);

  const postDatas = useSelector(state => state.postDatas);
  const myPost = postDatas.filter(post => post.uid === uid);

  const commentDatas = useSelector(state => state.comments);
  const myComment = commentDatas.filter(comment => comment.uid === uid);

  const replaceData = date => date.replace(/[^0-9]/g, '');
  const sortedMyPost = myPost.sort((a, b) => replaceData(b.date) - replaceData(a.date));
  const sortedCommentDatas = myComment.sort((a, b) => replaceData(b.time) - replaceData(a.time));

  const unitType = [
    {
      data: sortedMyPost,
      type: 'post'
    },
    {
      data: sortedCommentDatas,
      type: 'comment'
    }
  ];

  return (
    <div>
      <UserProfile />
      {unitType.map(unit => {
        return (
          <div>
            <MyPostCommentBox>
              <MyLabel>{`작성 ${unit.type === 'post' ? '글' : '댓글'} 목록`}</MyLabel>
            </MyPostCommentBox>
            <ListScroll datas={unit.data} type={unit.type} />
          </div>
        );
      })}
    </div>
  );
}

const MyPostCommentBox = styled.div`
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

export default PostContainer;
