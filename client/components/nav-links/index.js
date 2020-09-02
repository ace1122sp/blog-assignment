import React from 'react';
import PropTypes from 'prop-types';
import Link from '../link';

const NavLinks = ({ data }) => {
  return (
    <nav className='nav nav-pills flex-row flex-lg-column'>
      {data.map((i, index) => (
        <Link key={index} {...i} />
      ))}
    </nav>
  );
};

NavLinks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      description: PropTypes.string.isRequired,
      colorClass: PropTypes.string,
    })
  ).isRequired,
};

export default NavLinks;
