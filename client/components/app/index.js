import React from 'react';
import Header from '../header';
import Navbar from '../navbar';
import Content from '../content';
import './style.scss';

const App = () => (
  <div className='container-fluid d-flex flex-column min-height-full'>
    <Navbar />
    <Header />
    <Content />
  </div>
);

export default App;
