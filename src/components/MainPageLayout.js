import React from 'react';
import Nav from './Nav';
import Title from './Title';

function MainPageLayout({ children }) {
  return (
    <div>
      <Title title="Box-Office" subtitle="Are you looking for a actor?" />
      <Nav />

      {children}
    </div>
  );
}

export default MainPageLayout;
