import React from 'react';
import './style.scss';

const links = ['Link 1', 'Link 2', 'Link 3', 'My profile', 'Logout'];
const renderLinks = () =>
  links.map((link) => (
    <li key={link} className='nav-item'>
      <a className='nav-link' href='#'>
        {link}
      </a>
    </li>
  ));

const Navbar = () => (
  <nav className='row navbar navbar-expand-lg navbar-light bg-primary text-light justify-content-between'>
    <div className='d-flex justify-content-between flex-grow-1'>
      <span>My blog</span>
      <input type='text' placeholder='Search' />
    </div>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNav'
      aria-controls='navbarNav'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='flex-grow-0 collapse navbar-collapse' id='navbarNav'>
      <ul className='navbar-nav align-items-center'>{renderLinks()}</ul>
    </div>
  </nav>
);

export default Navbar;
