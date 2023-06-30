import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import Section from './Section';

function Home() {
  const posts = useSelector(state => state.postDatas);

  const hitPosts = posts
    .sort((a, b) => a.views - b.views)
    .reverse()
    .slice(0, 5);

  const orderedDate = posts
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .reverse()
    .slice(0, 5);

  return (
    <HomeLayout>
      <Section posts={hitPosts} name={'인기 게시글'} />
      <Section posts={orderedDate} name={'최신 게시글'} />
    </HomeLayout>
  );
}

export default Home;

const HomeLayout = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 120px;
  background-color: #12263a;
`;
