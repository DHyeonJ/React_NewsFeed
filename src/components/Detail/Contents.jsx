import React, { useState } from 'react';
import { css, styled } from 'styled-components';
import pet2 from '../../assets/pet2.png';
import loading from '../../assets/loadingW.png';
import { useSelector } from 'react-redux';
import Dots from './Dots';

function Contents({ post, param }) {
  const user = useSelector(state => state.user);

  if (post === undefined) {
    return (
      <Section>
        <TitleWrapper>
          <Writer></Writer>
          <Title></Title>
        </TitleWrapper>
        <ContentWrapper style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={loading} width="250px" height="230px" />
        </ContentWrapper>
        <Img src={pet2}></Img>
      </Section>
    );
  }

  return (
    <>
      <Section>
        <TitleWrapper>
          <TitleInnerWrapper>
            <Writer>{post.userEmail}</Writer>
            <Title>{post.title}</Title>
          </TitleInnerWrapper>
          {user.email === post.userEmail && <Dots param={param} />}
        </TitleWrapper>
        <ContentWrapper>
          {post.img !== undefined ? <ContentImg src={post.img} /> : <></>}
          <p>{post.content}</p>
        </ContentWrapper>
        <Img src={pet2}></Img>
      </Section>
    </>
  );
}

export default Contents;

const Img = styled.img`
  pointer-events: none;
  width: 100px;
  height: 200px;
  position: absolute;
  top: 110px;
  right: -63px;
`;
const TitleInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-top: 40px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Writer = styled.span`
  margin: 0 20px;
`;
const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const ContentWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const ContentImg = styled.img`
  max-width: 1000px;
  margin-bottom: 20px;
`;

const Section = styled.section`
  position: relative;
`;
