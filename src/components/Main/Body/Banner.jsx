import React from 'react';
import { styled } from 'styled-components';
import bgdog from '../../../assets/bgfamily.png';

const Banner = () => {
  return (
    <BannerLayout>
      <BannerText>
        Discover the Pet World with <br />
        <BannerSpan>Pinfo</BannerSpan>
      </BannerText>
      <BannerImage src={bgdog} />
    </BannerLayout>
  );
};

export default Banner;

const BannerLayout = styled.section`
  position: relative;
  width: 1200px;
  height: 420px;
  margin-bottom: 40px;
`;

const BannerText = styled.h2`
  margin: 60px 0 0 60px;
  padding-top: 20px;
  color: #222;
  font-size: 44px;
  font-weight: 700;
`;

const BannerImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 60px;
  width: 700px;
  height: 430px;
`;

const BannerSpan = styled.span`
  color: #12263a;
  font-size: 70px;
  line-height: 2;
  border-bottom: 2px solid orange;
  box-shadow: inset 0 -2px 0 orange;
`;
