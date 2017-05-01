
import React, { PropTypes } from 'react';
import Svg, { Path } from 'react-native-svg';

function CameraIcon({ width, height, color }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100">
      <Path fill={color} d="M50 40c-8.285 0-15 6.718-15 15 0 8.285 6.715 15 15 15 8.283 0 15-6.715 15-15 0-8.282-6.717-15-15-15zm40-15H78c-1.65 0-3.428-1.28-3.95-2.846l-3.1-9.31C70.425 11.28 68.65 10 67 10H33c-1.65 0-3.428 1.28-3.95 2.846l-3.1 9.31C25.425 23.72 23.65 25 22 25H10C4.5 25 0 29.5 0 35v45c0 5.5 4.5 10 10 10h80c5.5 0 10-4.5 10-10V35c0-5.5-4.5-10-10-10zM50 80c-13.807 0-25-11.193-25-25 0-13.806 11.193-25 25-25 13.805 0 25 11.194 25 25 0 13.807-11.195 25-25 25zm36.5-38.007c-1.932 0-3.5-1.566-3.5-3.5 0-1.932 1.568-3.5 3.5-3.5 1.934 0 3.5 1.568 3.5 3.5 0 1.934-1.567 3.5-3.5 3.5z" />
    </Svg>
  );
}

CameraIcon.defaultProps = {
  width: 45,
  height: 45,
  color: '#fff'
};

CameraIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

export default CameraIcon;
