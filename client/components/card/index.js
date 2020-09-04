import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Modal from '../modal';

// just for placeholder purposes
const renderImages = (images = [1, 2, 3]) =>
  images.map((i) => <img key={i} className='large-img m-1' />);

const Card = ({
  id,
  title,
  categoryId,
  text,
  createdAt,
  bgClass,
  editPost,
  deletePost,
}) => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleEdit = (data) => {
    editPost(Object.assign({ id }, data));
  };
  const handleDelete = () => {
    deletePost(id);
  };

  return (
    <div className={`${bgClass} d-flex flex-column p-2 p-lg-3 mb-2`}>
      <div className='d-flex'>
        <img className='small-img mr-1' />
        <div className='flex-grow-1'>
          <h5 className='mt-n1'>{title}</h5>
          <span className='flex-wrap text-dark'>Posted date: {createdAt}</span>
        </div>
        <div className='text-right'>
          <Button label='edit' handler={() => setModalOpened(true)} />
          <Button label='delete' handler={handleDelete} />
        </div>
      </div>
      <div className='my-2'>
        <p>{text}</p>
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        {renderImages()}
      </div>
      {modalOpened && (
        <Modal
          confirm={handleEdit}
          close={() => setModalOpened(false)}
          initTitle={title}
          initCategory={categoryId}
          initText={text}
        />
      )}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
  text: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  bgClass: PropTypes.string,
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

Card.defaultProps = {
  bgClass: 'bg-secondary',
  text: '',
};

export default Card;
