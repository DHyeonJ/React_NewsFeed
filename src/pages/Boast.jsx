import React from 'react';
import Header from '../components/Main/Header/Header';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Main/Footer/Footer';
import Boast from '../components/Boast/Boast';

function BoastPage() {
  return (
    <>
      <Header />
      <Layout>
        <Boast />
      </Layout>
      <Footer />
    </>
  );
}

export default BoastPage;
