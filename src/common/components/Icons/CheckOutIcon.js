import React, { PropTypes } from 'react';
import Svg, { Path } from 'react-native-svg';

function CheckOutIcon({ width, height, color }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 489.394 489.394">
      <Path fill={color} d="M375.79 92.867H166.863l17.507-42.795c3.725-9.132 1-19.574-6.69-25.744-7.7-6.166-18.538-6.508-26.64-.88L9.575 121.71C3.377 126.014-.22 133.167.01 140.705c.232 7.533 4.262 14.446 10.71 18.36l147.926 89.822c8.417 5.108 19.18 4.093 26.48-2.5 7.313-6.59 9.428-17.31 5.22-26.2l-19.443-41.133H375.79c15.118 0 27.417 12.536 27.417 27.654V356.56c0 15.118-12.3 27.19-27.418 27.19H149.05c-20.227 0-36.624 16.396-36.624 36.622v12.942c0 20.228 16.397 36.624 36.623 36.624h226.74c62.64 0 113.603-50.732 113.603-113.38V206.71c.002-62.646-50.962-113.84-113.604-113.84z"/>
    </Svg>
  );
}

CheckOutIcon.defaultProps = {
  width: 20,
  height: 20,
  color: '#fff'
};

CheckOutIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

export default CheckOutIcon;
