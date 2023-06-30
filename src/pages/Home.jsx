import React from 'react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Main/Header/Header';
import Body from '../components/Main/Body/Home';
import Footer from '../components/Main/Footer/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Layout>
        <Body />
        <Footer />
      </Layout>
    </>
  );
}

export default HomePage;
