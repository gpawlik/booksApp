
import React, { PropTypes } from 'react';
import Svg, { Path } from 'react-native-svg';

function CheckIcon({ width, height, color }) {
  return (
    <Svg viewBox="0 0 29.756 29.756" width={width} height={height}>
      <Path fill={color} d="M29.05 5.01l-.86-.86c-.943-.944-2.488-.944-3.434 0L10.172 18.738l-5.175-5.173c-.943-.944-2.49-.944-3.432 0l-.858.858c-.943.944-.943 2.49 0 3.433l7.744 7.752c.945.943 2.49.943 3.434 0L29.05 8.442c.94-.944.94-2.49 0-3.433z"/>
    </Svg>
  );
}

CheckIcon.defaultProps = {
  width: 18,
  height: 18,
  color: '#333'
};

CheckIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

export default CheckIcon;
