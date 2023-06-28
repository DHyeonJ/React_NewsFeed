import React from 'react';
import Header from '../components/Main/Header/Header';
import Footer from '../components/Main/Footer/Footer';
import Layout from '../components/Layout/Layout';
import Detail from '../components/Detail/Detail';

function DetailPage() {
  return (
    <>
      <Header />
      <Layout style={{ position: 'relative' }}>
        <Detail />
      </Layout>
      <Footer />
    </>
  );
}

export default DetailPage;
