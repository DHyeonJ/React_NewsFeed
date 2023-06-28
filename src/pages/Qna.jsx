import React from 'react';
import Header from '../components/Main/Header/Header';
import Footer from '../components/Main/Footer/Footer';
import Qna from '../components/Qna/Qna';
import Layout from '../components/Layout/Layout';

function QnaPage() {
  return (
    <>
      <Header />
      <Layout>
        <Qna />
      </Layout>
      <Footer></Footer>
    </>
  );
}

export default QnaPage;
