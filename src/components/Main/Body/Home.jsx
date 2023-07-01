import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import Section from './Section';
import bgdog from '../../../assets/bgfamily.png';
import side from '../../../assets/sidecat.png';

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
      <Text>
        Discover the Pet World with <br />
        <span
          style={{
            color: '#12263a',
            fontSize: '70px',
            lineHeight: 2,
            borderBottom: '2px solid orange',
            boxShadow: 'inset 0 -2px 0 orange'
            // background: 'linear-gradient(to top, #f4d1ae 85%, transparent 50%)'
          }}
        >
          Pinfo
        </span>
      </Text>
      <Section posts={hitPosts} name={'Popular'} />
      <Section posts={orderedDate} name={'New'} />
      <BgDogImg src={bgdog} />
      <SideCatImg src={side} />
    </HomeLayout>
  );
}

export default Home;

const HomeLayout = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 460px;
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
