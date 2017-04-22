
import React, { PropTypes } from 'react';
import Svg, {
  Circle,
  G,
  Path
}from 'react-native-svg';

function BadgeC({ width, height, style, isActive }) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 512.002 512.002">
      <Path d="M119.287 388.062c-4.552-2.96-7.288-8.016-7.28-13.44V32h287.987v342.623c.008 5.424-2.728 10.48-7.28 13.44L256 476.857l-136.713-88.796z" fill="#3689C9"/>
      <Circle cx="255.985" cy="375.982" r="8" fill="#2E485D"/>
      <Path d="M112.008 32v231.988h12c6.623 0 11.998-5.376 11.998-12v-81.195c.16-6.136 5.272-10.983 11.415-10.815.145 0 .29.008.425.016 6.624.088 12.07-5.216 12.16-11.84V87.997c0-17.67 14.326-32 31.997-32h151.993c13.255 0 24-10.742 24-23.998H112.007z" fill="#4C9FD7"/>
      <G fill="#2E485D">
        <Circle cx="159.99" cy="79.996" r="8"/>
        <Circle cx="351.981" cy="79.996" r="8"/>
      </G>
      <G fill="#1B6FAB">
        <Path d="M387.995 103.995c-6.624 0-12 5.376-12 12v73.196c0 5.97-4.83 10.8-10.798 10.8H363.997c-5.088-.032-9.632 3.184-11.28 8H176.006c-8.84 0-16 7.16-16 16s7.16 15.998 16 15.998h175.992v24H176.005c-8.84 0-16 7.16-16 15.998 0 8.84 7.16 16 16 16h164.072c-6.624-.05-12.03 5.295-12.08 11.918V343.982c-.055 35.566-18.118 68.693-47.997 87.996-15.015 9.88-24.04 26.663-24 44.638l136.715-88.556c4.168-2.68 6.856-7.144 7.28-12.08V103.996h-12z"/>
        <Path d="M176.005 151.993h175.992c8.84 0 16 7.16 16 16s-7.16 15.998-16 15.998H176.005c-8.84 0-16-7.16-16-15.998 0-8.84 7.16-16 16-16z"/>
      </G>
      <G fill="#FFF">
        <Path d="M168.005 255.988h175.992c8.84 0 16 7.16 16 16s-7.16 15.998-16 15.998H168.005c-8.84 0-16-7.16-16-16 0-8.838 7.16-15.998 16-15.998zM168.005 199.99h175.992c8.84 0 16 7.16 16 16s-7.16 16-16 16H168.005c-8.84 0-16-7.16-16-16s7.16-16 16-16z"/>
      </G>
      <G fill="#DDDFE1">
        <Path d="M168.005 287.987h175.992c8.84 0 16-7.16 16-16H184.003c-8.84 0-16 7.16-16 16zM168.005 231.99h175.992c8.84 0 16-7.16 16-16H184.003c-8.84 0-16 7.16-16 16z"/>
      </G>
      <Path d="M168.005 143.993h175.992c8.84 0 16 7.16 16 16s-7.16 15.998-16 15.998H168.005c-8.84 0-16-7.16-16-15.998 0-8.84 7.16-16 16-16z" fill="#FFF"/>
      <Path d="M168.005 175.992h175.992c8.84 0 16-7.16 16-16H184.003c-8.84 0-16 7.16-16 16z" fill="#DDDFE1"/>
      <Path d="M399.994 0H112.008c-17.67 0-32 14.327-32 32v342.623c.08 16.16 8.29 31.19 21.84 39.998l145.433 94.797c5.305 3.448 12.136 3.448 17.44 0l145.433-94.556c13.55-8.807 21.76-23.838 21.84-39.997V32c0-17.673-14.328-32-32-32zm0 68.477c-6.872-6.24-15.4-10.352-24.56-11.84-1.495-9.2-5.64-17.758-11.918-24.638h36.478v36.477zM148.486 32c-6.264 6.863-10.408 15.39-11.92 24.558-9.167 1.512-17.694 5.656-24.558 11.92v-36.48h36.478zM256 476.857l-26.478-17.2c11.047-4.6 20.327-12.622 26.48-22.878 6.15 10.256 15.43 18.28 26.478 22.88L256 476.857zm143.994-102.236c.008 5.424-2.728 10.48-7.28 13.44l-91.756 59.916c-20.895-1.592-37.022-19.04-36.958-39.998 0-4.416-3.584-8-8-8s-8 3.584-8 8c.064 20.96-16.063 38.406-36.958 39.998l-91.756-59.917c-4.552-2.96-7.288-8.015-7.28-13.438V103.995c0-17.67 14.327-31.998 31.998-31.998 4.416 0 8-3.584 8-8 0-17.67 14.327-32 32-32h143.992c17.67 0 32 14.328 32 32 0 4.416 3.583 8 8 8 17.67 0 31.998 14.327 31.998 31.998v270.627z" fill="#2D4961"/>
      <Path d="M80.01 32v271.986c8.84 0 15.998-7.16 15.998-16V32c0-8.84 7.16-16 16-16h271.986c8.84 0 16-7.16 16-16H112.007c-17.68 0-32 14.327-32 32z" fill="#44637F"/>
      <Path d="M410.154 414.86c13.55-8.807 21.76-23.838 21.84-39.997V55.997c-8.84 0-16 7.16-16 16V376.46c0 8.04-4.024 15.55-10.72 20L269.28 487.096c-8.304 5.56-13.287 14.887-13.28 24.88 3.097.007 6.12-.88 8.72-2.56l145.434-94.556z" fill="#123247"/>
    </Svg>
  );
}

BadgeC.defaultProps = {
  width: 50,
  height: 50,
  isActive: false
};

BadgeC.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isActive: PropTypes.bool,
  style: PropTypes.number
};

export default BadgeC;