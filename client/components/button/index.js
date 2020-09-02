import React from 'react';
import PropTypes from 'prop-types';

// check if ok to not use tag wrapper
const Button = ({ handler, label }) => (
  <button
    onClick={handler}
    className='btn btn-primary btn-sm fixed-btn-width mr-1 text-center'
  >
    {label}
  </button>
);

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  handler: () => {},
};

export default Button;
