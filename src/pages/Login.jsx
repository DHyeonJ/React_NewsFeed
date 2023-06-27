import React from 'react';
import Header from '../components/Main/Header/Header';
import Footer from '../components/Main/Footer/Footer';
import Login from '../components/Login/Login';
import Layout from '../components/Layout/Layout';

function login() {
  return (
    <>
      <Header />
      <Layout>
        <Login />
      </Layout>
      <Footer></Footer>
    </>
  );
}

export default login;
