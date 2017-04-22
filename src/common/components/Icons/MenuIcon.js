
import React, { PropTypes } from 'react';
import Svg, { Path } from 'react-native-svg';

function MenuIcon({ width, height }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 250.579 250.579">
      <Path d="M22.373 76.068h205.832c12.356 0 22.374-10.017 22.374-22.373 0-12.356-10.018-22.373-22.375-22.373H22.373C10.017 31.322 0 41.34 0 53.696c0 12.356 10.017 22.372 22.373 22.372zm205.832 26.848H22.373C10.017 102.916 0 112.933 0 125.29c0 12.356 10.017 22.372 22.373 22.372h205.832c12.356 0 22.374-10.016 22.374-22.373 0-12.357-10.02-22.374-22.375-22.374zm0 71.594H22.373C10.017 174.51 0 184.526 0 196.883c0 12.356 10.017 22.373 22.373 22.373h205.832c12.356 0 22.374-10.017 22.374-22.373 0-12.357-10.02-22.373-22.375-22.373z" fill-rule="evenodd" clip-rule="evenodd"/>
    </Svg>
  );
}

MenuIcon.defaultProps = {
  width: 20,
  height: 20
};

MenuIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default MenuIcon;
