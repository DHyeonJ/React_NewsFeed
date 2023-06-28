import React from 'react';
import Header from '../components/Main/Header/Header';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Main/Footer/Footer';
import Qna from '../components/Qna/Qna';

function QnaPage() {
  return (
    <>
      <Header />
      <Layout>
        <Qna />
      </Layout>
      <Footer />
    </>
  );
}

export default QnaPage;
