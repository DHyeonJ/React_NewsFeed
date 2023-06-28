import React from 'react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Main/Header/Header';
import Footer from '../components/Main/Footer/Footer';
import PostContainer from '../components/Userpage/PostContainer';

function UserPage() {
  return (
    <>
      <Header />
      <Layout>
        <PostContainer />
      </Layout>
      <Footer />
    </>
  );
}

export default UserPage;
