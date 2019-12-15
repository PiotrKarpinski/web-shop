import React from 'react';
import PageNav from './PageNav'
import Header from './Header'
import Footer from './Footer'
import Home from '../views/Home'

function MainLayout() {
  return (
    <div>
    <PageNav />
    <Header />
    <Home />
    <Footer />
    </div>
  );
}

export default MainLayout;
