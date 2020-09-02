import React, { useState } from 'react';

const Notification = () => {
  const [showingMessage, setShowingMessage] = useState(true);

  if (!showingMessage) return null;

  return (
    <div
      onClick={() => setShowingMessage(false)}
      className='d-flex justify-content-between height-4 bg-secondary my-1  pl-2 pl-lg-3'
    >
      <span className='align-self-center'>
        Container for showing application messages
      </span>
      <div>
        <button id='b' className='btn no-outline'>
          x
        </button>
      </div>
    </div>
  );
};

export default Notification;
