import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

// just for placeholder purposes
const renderImages = (images = [1, 2, 3]) =>
  images.map((i) => <img key={i} className='large-img m-1' />);

const Card = ({ id, title, text, createdAt, bgClass }) => {
  const renderButtons = () => {
    return ['edit', 'delete'].map((btn) => <Button key={btn} label={btn} />);
  };

  return (
    <div className={`${bgClass} d-flex flex-column p-2 p-lg-3 mb-2`}>
      <div className='d-flex'>
        <img className='small-img mr-1' />
        <div className='flex-grow-1'>
          <h5 className='mt-n1'>{title}</h5>
          <span className='flex-wrap text-dark'>Posted date: {createdAt}</span>
        </div>
        <div className='text-right'>{renderButtons()}</div>
      </div>
      <div className='my-2'>
        <p>{text}</p>
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        {renderImages()}
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  createdAt: PropTypes.string,
  bgClass: PropTypes.string,
};

Card.defaultProps = {
  bgClass: 'bg-secondary',
};

export default Card;
