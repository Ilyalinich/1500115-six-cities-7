import React from 'react';
import Header from '../../ui/header/header';
import ContentBoard from './content-board/content-board';


function Main() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <ContentBoard />
    </div>
  );
}


export default Main;
