import React from 'react';
import Header from '../components/Main/Header/Header';
import Footer from '../components/Main/Footer/Footer';
import Contents from '../components/Detail/Contents';
import Layout from '../components/Layout/Layout';
import Form from '../components/Detail/CommentForm';
import CommentsList from '../components/Detail/CommentsList';

function DetailPage() {
  return (
    <>
      <Header />
      <Layout style={{ position: 'relative' }}>
        <Contents />
        <Form />
        <CommentsList />
      </Layout>
      <Footer />
    </>
  );
}

export default DetailPage;
