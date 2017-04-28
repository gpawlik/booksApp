import React, { PropTypes } from 'react';
import Svg, { Path } from 'react-native-svg';

function SearchIcon({ width, height, color, style }) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 45.008 45.009">
      <Path fill={color} d="M43.462 35.997l-11.4-11.37c1.196-2.352 1.844-4.962 1.844-7.676 0-4.527-1.765-8.784-4.966-11.985C25.74 1.763 21.48 0 16.953 0S8.167 1.763 4.966 4.965C1.766 8.167 0 12.425 0 16.952c0 4.528 1.764 8.785 4.966 11.986 3.2 3.202 7.46 4.965 11.986 4.965 2.714 0 5.325-.646 7.675-1.842l11.37 11.403c1.03 1.03 2.383 1.546 3.733 1.546s2.7-.518 3.73-1.547c2.064-2.063 2.064-5.404.002-7.466zM9.444 24.46c-2.005-2.007-3.11-4.672-3.11-7.508s1.105-5.502 3.11-7.508c2.006-2.005 4.672-3.11 7.508-3.11s5.502 1.104 7.508 3.11c2.005 2.005 3.11 4.67 3.11 7.507s-1.105 5.503-3.11 7.51c-2.006 2.004-4.673 3.108-7.508 3.108s-5.5-1.103-7.508-3.11z"/>
    </Svg>
  );
}

SearchIcon.defaultProps = {
  width: 25,
  height: 25,
  color: '#222'
};

SearchIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.number
};

export default SearchIcon;
