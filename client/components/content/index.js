import React from 'react';
import NavLinks from '../nav-links';
import Card from '../card';

const links = [1, 2, 3].map((num) => ({
  description: `Category ${num}`,
}));

const Content = () => (
  <main className='row flex-grow-1'>
    <aside className='col-lg-3 p-2 p-lg-3'>
      <h5 className='ml-2'>Blog categories</h5>
      <NavLinks data={links} />
    </aside>
    <div className='col-12 col-lg-9'>
      <Card />
      <Card />
    </div>
  </main>
);

export default Content;
