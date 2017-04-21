
import React, { PropTypes } from 'react';
import Svg, { Path } from 'react-native-svg';

function StarHalfIcon({ width, height, color }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 475.044 475.044">
      <Path fill={color} d="M474.487 183.276c-1.71-5.236-6.852-8.52-15.41-9.85l-143.323-20.84L251.52 22.68c-4-7.803-8.66-11.703-13.99-11.703-5.518 0-10.182 3.9-13.987 11.704l-64.24 129.906-143.325 20.84c-8.564 1.33-13.704 4.614-15.415 9.85-1.71 5.236.478 10.898 6.567 16.99l103.924 101.067L86.5 444.083c-.95 6.285-.38 11.172 1.716 14.7 2.092 3.525 5.33 5.284 9.707 5.284 3.237 0 7.043-1.14 11.42-3.433l128.194-67.382 128.19 67.382c4.377 2.286 8.186 3.433 11.423 3.433 4.38 0 7.622-1.76 9.71-5.283 2.087-3.53 2.658-8.416 1.707-14.702l-24.55-142.75 103.63-101.067c6.283-6.09 8.565-11.753 6.84-16.99zm-135.89 91.79l-13.99 13.42 3.43 18.843 17.128 101.356-90.786-47.965-16.85-8.855V76.927l45.396 91.933 8.56 17.128 18.85 2.856 101.64 14.844-73.38 71.377z"/>
    </Svg>
  );
}

StarHalfIcon.defaultProps = {
  width: 10,
  height: 10,
  color: '#f1c40f'
};

StarHalfIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

export default StarHalfIcon;
