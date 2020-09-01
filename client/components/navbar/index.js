import React from 'react';
import './style.scss';

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
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Link 1
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Link 2
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Link 3
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            My profile
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
