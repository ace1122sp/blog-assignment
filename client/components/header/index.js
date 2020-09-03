import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'client/components/modal';
import Notification from 'client/components/notification';

const Header = ({ createPost }) => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className='row'>
      <header className='col-12 col-lg-9 d-flex flex-column offset-lg-3 my-1'>
        <h2 className='font-weight-bold'>Welcome to My Blog</h2>
        <Notification />
        <div className='d-flex justify-content-end'>
          <button
            className='btn btn-primary btn-sm my-1 px-4'
            onClick={() => setModalOpened(true)}
            disabled={modalOpened}
          >
            Add post
          </button>
        </div>
      </header>
      {modalOpened && (
        <Modal confirm={createPost} close={() => setModalOpened(false)} />
      )}
    </div>
  );
};

Header.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default Header;
