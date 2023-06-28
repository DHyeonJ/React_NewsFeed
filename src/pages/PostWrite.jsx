import React from 'react';
import Header from '../components/Main/Header/Header';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Main/Footer/Footer';
import PostWrite from '../components/PostWrite/PostWrite';

function postWrite() {
  return (
    <>
      <Header />
      <Layout>
        <PostWrite />
      </Layout>
      <Footer />
    </>
  );
}

export default postWrite;
