import React from 'react';
import Notification from 'client/components/notification';

const Header = () => {
  return (
    <div className='row'>
      <header className='col-sm-12 col-md-9 d-flex flex-column offset-md-3 my-1'>
        <h2 className='font-weight-bold'>Welcome to My Blog</h2>
        <Notification />
        <div className='d-flex justify-content-end'>
          <button className='btn btn-primary btn-sm my-1 px-4'>Add post</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
