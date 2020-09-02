import React from 'react';
import NavLinks from '../nav-links';

const links = [1, 2, 3].map((num) => ({
  description: `Category ${num}`,
}));

const Content = () => (
  <main className='row flex-grow-1'>
    <aside className='col-md-3'>
      <h5 className='ml-2'>Blog categories</h5>
      <NavLinks data={links} />
    </aside>
    <div className='col-12 col-md-9'></div>
  </main>
);

export default Content;
