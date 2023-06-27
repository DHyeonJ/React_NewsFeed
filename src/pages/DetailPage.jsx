import React from 'react';
import Header from '../components/Main/Header/Header';
import Contents from '../components/Detail/Contents';
import Layout from '../components/Layout/Layout';
import Form from '../components/Detail/Form';
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
    </>
  );
}

export default DetailPage;
