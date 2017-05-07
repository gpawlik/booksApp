import React, { PropTypes } from 'react';
import Svg, { Path } from 'react-native-svg';

function CheckInIcon({ width, height, color }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 489.394 489.394">
      <Path fill={color} d="M113.605 92.868H322.53l-17.507-42.795c-3.725-9.132-1-19.574 6.69-25.744 7.7-6.167 18.538-6.51 26.64-.88l141.465 98.26c6.197 4.305 9.795 11.458 9.564 18.996-.232 7.533-4.262 14.446-10.71 18.36l-147.927 89.822c-8.416 5.107-19.18 4.093-26.48-2.5-7.312-6.59-9.427-17.31-5.22-26.2l19.444-41.133H113.604c-15.12 0-27.418 12.536-27.418 27.654v149.85c0 15.12 12.3 27.19 27.418 27.19h226.74c20.226 0 36.624 16.396 36.624 36.623v12.942c0 20.227-16.4 36.623-36.624 36.623h-226.74C50.962 469.938 0 419.208 0 356.56V206.71C0 144.063 50.963 92.868 113.605 92.868z"/>
    </Svg>
  );
}

CheckInIcon.defaultProps = {
  width: 20,
  height: 20,
  color: '#fff'
};

CheckInIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

export default CheckInIcon;
