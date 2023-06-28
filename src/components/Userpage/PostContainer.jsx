import React from 'react';
import { styled } from 'styled-components';

const PostBox = styled.div`
  width: 700px;
  height: 200px;
  border: 1px solid;
`;

function PostContainer() {
  return <PostBox></PostBox>;
}

export default PostContainer;
