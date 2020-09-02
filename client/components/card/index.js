import React from 'react';
import Button from '../button';

// just for placeholder purposes
const renderImages = (images = [1, 2, 3]) =>
  images.map((i) => <img key={i} className='large-img m-1' />);

const Card = () => {
  const renderButtons = () => {
    return ['edit', 'delete'].map((btn) => <Button key={btn} label={btn} />);
  };

  return (
    <div className='d-flex flex-column p-2 p-lg-3 mb-2'>
      <div className='d-flex'>
        <img className='small-img mr-1' />
        <div className='flex-grow-1'>
          <h5 className='mt-n1'>Blog post</h5>
          <span className='text-secondary flex-wrap small-text'>
            Posted date: 11.11.2000. at 10:10 by User 1
          </span>
        </div>
        <div className='text-right'>{renderButtons()}</div>
      </div>
      <div className='my-2'>
        <p>
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        {renderImages()}
      </div>
    </div>
  );
};

export default Card;
