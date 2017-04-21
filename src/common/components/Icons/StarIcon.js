
import React, { PropTypes } from 'react';
import Svg, { Path } from 'react-native-svg';

function StarIcon({ width, height, color }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 46.354 46.354">
      <Path fill={color} d="M21.57 2.05c.303-.613.927-1 1.61-1 .68 0 1.306.387 1.608 1l5.77 11.694c.262.53.768.896 1.353.98L44.818 16.6c.677.098 1.237.572 1.448 1.22.21.65.035 1.364-.454 1.84l-9.337 9.104c-.423.412-.616 1.006-.517 1.588l2.204 12.855c.114.674-.16 1.354-.715 1.756-.553.4-1.284.453-1.89.137L24.01 39.03c-.52-.275-1.146-.275-1.67 0L10.798 45.1c-.604.316-1.337.264-1.89-.137-.553-.4-.83-1.082-.714-1.756l2.204-12.855c.1-.582-.094-1.176-.517-1.588L.542 19.66c-.49-.477-.665-1.19-.454-1.84.21-.648.772-1.122 1.45-1.22l12.907-1.875c.584-.085 1.09-.452 1.35-.982L21.57 2.05z"/>
    </Svg>
  );
}

StarIcon.defaultProps = {
  width: 10,
  height: 10,
  color: '#f1c40f'
};

StarIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

export default StarIcon;
