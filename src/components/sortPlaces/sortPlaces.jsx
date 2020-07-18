import React from 'react';
import propTypes from 'prop-types';

const SortPlaces = (props) => {
  const {children} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {children}
    </form>

  );
};

SortPlaces.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired
};

export default SortPlaces;
