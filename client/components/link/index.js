import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ to, description, colorClass }) => {
  return (
    <a
      className={`flex-sm-fill text-sm-start nav-link ${colorClass}`}
      href={to}
    >
      {description}
    </a>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colorClass: PropTypes.string.isRequired,
};

Link.defaultProps = {
  to: '#',
  colorClass: 'text-dark',
};

export default Link;
