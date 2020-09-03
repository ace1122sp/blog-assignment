import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ description, colorClass, onClick }) => {
  return (
    <a
      className={`flex-sm-fill text-sm-start nav-link ${colorClass}`}
      onClick={onClick}
      href='#'
    >
      {description}
    </a>
  );
};

Link.propTypes = {
  description: PropTypes.string.isRequired,
  colorClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Link.defaultProps = {
  colorClass: 'text-dark',
};

export default Link;
