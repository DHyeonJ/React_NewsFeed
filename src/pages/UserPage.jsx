import React from 'react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Main/Header/Header';
import Footer from '../components/Main/Footer/Footer';
import PostContainer from '../components/Userpage/PostContainer';
import UserProfile from '../components/Userpage/UserProfile';

function UserPage() {
  return (
    <>
      <Header />
      <Layout>
        <PostContainer />
        <UserProfile />
      </Layout>
      <Footer />
    </>
  );
}

export default UserPage;
