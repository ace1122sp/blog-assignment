import React from 'react';
import PropTypes from 'prop-types';

const FormInputWrapper = ({ label, labelFor, children }) => {
  return (
    <div className='form-group'>
      <label htmlFor={labelFor} className='col-form-label'>
        {label}
      </label>
      {children}
    </div>
  );
};

FormInputWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FormInputWrapper;
