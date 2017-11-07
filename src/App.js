
import React from 'react';
import PropTypes from 'prop-types';

const Star = ({ selected = false, onClick = f => f }) =>
  <div className={selected ? "star selected" : "star"} onClick={onClick} />

// optionalArray: PropTypes.array,
// optionalBool: PropTypes.bool,
// optionalFunc: PropTypes.func,
// optionalNumber: PropTypes.number,
// optionalObject: PropTypes.object,
// optionalString: PropTypes.string,
// optionalSymbol: PropTypes.symbol,

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) =>
  <div className="star-rating">
    {[...Array(totalStars)].map((star, index) => <Star key={index} selected={index < starsSelected} onClick={() => onRate(index + 1)} />)}
  </div>

export default StarRating;
