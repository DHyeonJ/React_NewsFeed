import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import Section from './Section';
import bgdog from '../../../assets/bgfamily.png';
import sideCat from '../../../assets/sidecat.png';
import Banner from './Banner';

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
    <>
      <Banner />
      <Section posts={hitPosts} name={'Popular'} />
      <Section posts={orderedDate} name={'New'} />
      <SideCatImg src={sideCat} />
    </>
  );
}

export default Home;

const HomeLayout = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fffeee;
`;
const BgDogImg = styled.img`
  position: absolute;
  top: -430px;
  right: 60px;
  width: 700px;
  height: 430px;
`;
const SideCatImg = styled.img`
  position: absolute;
  bottom: 410px;
  left: -400px;
  width: 400px;
`;
const Text = styled.p`
  position: absolute;
  top: -370px;
  left: 60px;
  color: #222;
  font-size: 44px;
  font-weight: 700;
`;
