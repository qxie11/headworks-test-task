import React from 'react';
import AddClient from '../components/Nav/AddClient';
import ToAbout from '../components/Nav/ToAbout';
import ToMain from './../components/Nav/ToMain';

const Nav = () => {
  return (
    <>
      <AddClient />
      <ToAbout />
      <ToMain />
    </>
  )
}

export default Nav;
