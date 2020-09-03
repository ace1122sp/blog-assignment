import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import FormInputWrapper from '../form-input-wrapper';

// TODO: disable page scrolling

const categoryOptions = [1, 2, 3].map((num) => (
  <option key={num} value={num}>{`Category ${num}`}</option>
));

const Modal = ({ confirm, close }) => {
  const [category, setCategory] = useState(1);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = () => {
    confirm({ title, category, text });
    close();
  };

  const renderButtons = () => {
    const buttons = [
      { label: 'Post', handler: handleSubmit },
      { label: 'Cancel', handler: close },
    ];

    return buttons.map(({ label, handler }, i) => (
      <Button key={i} onClick={handler} label={label} />
    ));
  };

  return (
    <div
      className='modal custom-modal'
      id='modal'
      tabIndex='-1'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-scrollable modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='modalLabel'>
              Add/Edit blog post
            </h5>
          </div>
          <div className='modal-body'>
            <form>
              <FormInputWrapper label='Category:' labelFor='category-input'>
                <select
                  className='custom-select'
                  id='category-input'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categoryOptions}
                </select>
              </FormInputWrapper>
              <FormInputWrapper label='Title:' labelFor='title-input'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Title of the post'
                  id='title-input'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </FormInputWrapper>
              <FormInputWrapper label='Text:' labelFor='text-input'>
                <textarea
                  className='form-control'
                  id='text-input'
                  placeholder='Text of the post'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </FormInputWrapper>
            </form>
          </div>
          <div className='modal-footer'>{renderButtons()}</div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  confirm: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default Modal;
