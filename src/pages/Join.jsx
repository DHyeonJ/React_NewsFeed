import React from 'react';
import Header from '../components/Main/Header/Header';
import Footer from '../components/Main/Footer/Footer';
import Form from '../components/Join/Form';
import Layout from '../components/Layout/Layout';

function join() {
  return (
    <>
      <Header></Header>
      <Layout>
        <Form />
      </Layout>
      <Footer></Footer>
    </>
  );
}

export default join;
