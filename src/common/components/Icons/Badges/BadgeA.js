
import React, { PropTypes } from 'react';
import Svg, {
  Circle,
  G,
  Path
}from 'react-native-svg';

function BadgeA({ width, height, style, isActive }) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 512.002 512.002">
      <Path d="M119.287 388.062c-4.552-2.96-7.288-8.016-7.28-13.44V32h287.987v342.623c.008 5.424-2.728 10.48-7.28 13.44L256 476.857l-136.713-88.796z" fill="#E2E5E7"/>
      <Path d="M387.995 103.995c-6.624 0-12 5.376-12 12v73.196c0 5.97-4.83 10.8-10.798 10.8H363.997c-6.584-.048-11.95 5.256-12 11.84v73.356c0 5.968-4.83 10.8-10.798 10.8h-1.12c-1.77-.01-3.52.367-5.12 1.12-.785-2.193-2.04-4.185-3.68-5.84L288 247.987l26.32-26.32 8 8c3.35 2.873 8.407 2.48 11.278-.87 2.568-2.993 2.568-7.417 0-10.41l-12-11.998 24.72-24.72c3.352 2.873 8.408 2.48 11.28-.87 2.567-2.993 2.567-7.417 0-10.41l-16-15.998c-3.352-2.872-8.408-2.48-11.28.872-2.567 2.992-2.567 7.416 0 10.408l-24.718 24.72-12-12c-3.35-2.872-8.407-2.48-11.278.872-2.568 2.992-2.568 7.416 0 10.408l8 8-26.32 26.32-26.318-26.32 8-8c2.872-3.352 2.48-8.408-.872-11.28-2.992-2.567-7.416-2.567-10.408 0l-12 12-24.718-24.72c2.872-3.35 2.48-8.407-.872-11.278-2.992-2.568-7.416-2.568-10.408 0l-16 16c-2.87 3.35-2.48 8.407.873 11.278 2.99 2.568 7.415 2.568 10.407 0l24.72 24.72-12 11.998c-2.872 3.352-2.48 8.408.872 11.28 2.99 2.567 7.415 2.567 10.407 0l8-8 26.32 26.318-43.28 43.278c-3.023 3.008-4.72 7.096-4.72 11.36v17.358h17.36c4.24-.016 8.296-1.712 11.28-4.72l43.357-43.278 43.278 43.278c2.984 3.008 7.04 4.704 11.28 4.72H328v24c-.057 35.565-18.12 68.692-48 87.995-15.014 9.88-24.038 26.662-23.998 44.637l136.714-88.556c4.168-2.68 6.856-7.143 7.28-12.078V103.995h-12.003z" fill="#D1D9E1"/>
      <Path d="M112.008 32v231.988h12c6.623 0 11.998-5.376 11.998-12v-81.195c.16-6.136 5.272-10.983 11.415-10.815.145 0 .29.008.425.016 6.624.088 12.07-5.216 12.16-11.84V87.997c0-17.67 14.326-32 31.997-32h151.993c13.255 0 24-10.742 24-23.998H112.007z" fill="#F1F2F2"/>
      <Path d="M399.994 0H112.008c-17.67 0-32 14.327-32 32v342.623c.08 16.16 8.29 31.19 21.84 39.998l145.433 94.797c5.305 3.448 12.136 3.448 17.44 0l145.433-94.556c13.55-8.807 21.76-23.838 21.84-39.997V32c0-17.673-14.328-32-32-32zm0 68.477c-6.872-6.24-15.4-10.352-24.56-11.84-1.495-9.2-5.64-17.758-11.918-24.638h36.478v36.477zM148.486 32c-6.264 6.863-10.408 15.39-11.92 24.558-9.167 1.512-17.694 5.656-24.558 11.92v-36.48h36.478zM256 476.857l-26.478-17.2c11.047-4.6 20.327-12.622 26.48-22.878 6.15 10.256 15.43 18.28 26.478 22.88L256 476.857zm143.994-102.236c.008 5.424-2.728 10.48-7.28 13.44l-91.756 59.916c-20.895-1.592-37.022-19.04-36.958-39.998 0-4.416-3.584-8-8-8s-8 3.584-8 8c.064 20.96-16.063 38.406-36.958 39.998l-91.756-59.917c-4.552-2.96-7.288-8.015-7.28-13.438V103.995c0-17.67 14.327-31.998 31.998-31.998 4.416 0 8-3.584 8-8 0-17.67 14.327-32 32-32h143.992c17.67 0 32 14.328 32 32 0 4.416 3.583 8 8 8 17.67 0 31.998 14.327 31.998 31.998v270.627z" fill="#2D4961"/>
      <Path d="M410.154 414.86c13.55-8.807 21.76-23.838 21.84-39.997V55.997c-8.84 0-16 7.16-16 16V376.46c0 8.04-4.024 15.55-10.72 20L269.28 487.096c-8.304 5.56-13.287 14.887-13.28 24.88 3.097.007 6.12-.88 8.72-2.56l145.434-94.556z" fill="#123247"/>
      <G fill="#2E485D">
        <Circle cx="255.985" cy="375.982" r="8"/>
        <Circle cx="159.99" cy="79.996" r="8"/>
        <Circle cx="351.981" cy="79.996" r="8"/>
      </G>
      <Path d="M80.01 32v271.986c8.84 0 15.998-7.16 15.998-16V32c0-8.84 7.16-16 16-16h271.986c8.84 0 16-7.16 16-16H112.007c-17.68 0-32 14.327-32 32z" fill="#44637F"/>
      <G fill="#2E485D">
        <Circle cx="327.982" cy="103.995" r="8"/>
        <Circle cx="351.981" cy="239.989" r="8"/>
        <Circle cx="159.99" cy="239.989" r="8"/>
        <Circle cx="183.988" cy="103.995" r="8"/>
        <Circle cx="255.985" cy="343.984" r="8"/>
      </G>
      <Path d="M200.004 207.99l99.275 99.275c2.983 3.008 7.04 4.704 11.278 4.72h17.44v-17.36c-.017-4.24-1.713-8.295-4.72-11.278L224 183.992l-23.998 23.998z" fill="#2D4961"/>
      <Path d="M280 263.988c-2.896-3.08-2.896-7.88 0-10.96 3.568-3.616 3.568-9.424 0-13.04l-5.76-5.76-11.92 11.92-32.957-33.038c-3.104-3.12-3.104-8.16 0-11.28 3.472-3.463 3.472-9.087 0-12.558l-5.36-5.28-11.92 11.92-12.078 12.078 11.28 11.28 87.995 87.995c2.984 3.008 7.04 4.704 11.28 4.72h17.438L280 263.988z" fill="#123247"/>
      <Path fill="#EE2C39" d="M203.975 203.946L168 167.97l16.007-16.008 35.976 35.976z"/>
      <Path d="M288 183.99l-99.275 99.276c-3.024 3.008-4.72 7.096-4.72 11.36v17.358h17.36c4.24-.016 8.295-1.712 11.278-4.72l99.355-99.275-23.998-24z" fill="#2D4961"/>
      <Path d="M299.92 195.91L288 183.99l-5.04 5.04c-3.472 3.465-3.472 9.09 0 12.56 3.104 3.12 3.104 8.16 0 11.28l-98.955 99.114h17.36c4.24-.016 8.295-1.712 11.278-4.72l87.996-87.996 11.358-11.28-12.08-12.077z" fill="#123247"/>
      <Path fill="#EE2C39" d="M292.038 187.983l35.975-35.975 16.008 16.008-35.974 35.975z"/>
      <G fill="#CC202C">
        <Path d="M335.997 159.993l-8-8-9.68 9.68c4.416 4.392 4.44 11.535.048 15.95l-.048.05-18.32 18.318 8 8 28-27.998 8-8-8-8zM176.005 159.993l8-8 9.68 9.68c-4.416 4.392-4.44 11.535-.048 15.95l.048.05 18.32 18.318-8 8-28-27.998-8-8 8-8z"/>
      </G>
      <G fill="#2D4961">
        <Path d="M240.002 175.992c.016 2.128-.824 4.168-2.32 5.68l-39.998 39.998c-3.352 2.872-8.408 2.48-11.28-.872-2.567-2.992-2.567-7.416 0-10.408l40-39.998c3.15-3.096 8.215-3.04 11.31.112 1.44 1.464 2.256 3.432 2.288 5.488zM192.004 151.993c.016 2.128-.824 4.168-2.32 5.68l-16 16c-3.35 2.87-8.407 2.48-11.278-.873-2.568-2.992-2.568-7.416 0-10.408l16-16c3.15-3.095 8.215-3.04 11.31.113 1.44 1.464 2.256 3.432 2.288 5.488z"/>
      </G>
      <Path d="M186.324 210.31c3.12 3.104 8.16 3.104 11.28 0L232 175.992c1.505-1.632 4.05-1.744 5.68-.24 1.633 1.504 1.745 4.048.24 5.68l-39.997 39.998c-3.072 3.2-8.16 3.312-11.36.24-3.207-3.072-3.31-8.16-.24-11.36z" fill="#123247"/>
      <Path d="M178.325 146.313l-16 16-.96 1.12c-1.255 1.83-.79 4.343 1.04 5.6 1.833 1.255 4.345.79 5.6-1.04l16-16c1.576-1.544 1.6-4.08.056-5.656-1.28-1.304-3.27-1.576-4.855-.664l-.88.64z" fill="#44637F"/>
      <Path d="M343.997 175.992c-2.128.016-4.168-.824-5.68-2.32l-16-16c-2.87-3.35-2.48-8.407.873-11.278 2.992-2.568 7.416-2.568 10.408 0l16 16c3.095 3.15 3.04 8.215-.113 11.31-1.472 1.44-3.44 2.256-5.488 2.288z" fill="#2D4961"/>
      <Path d="M349.357 162.072l-16-16-1.12-.96c-1.91-1.103-4.36-.447-5.463 1.465-.912 1.576-.64 3.576.664 4.856l16.56 16.56c1.543 1.575 4.08 1.6 5.655.055 1.304-1.28 1.576-3.272.664-4.856l-.96-1.12z" fill="#44637F"/>
      <Path d="M319.998 223.99c-2.128.016-4.168-.824-5.68-2.32l-39.998-39.998c-2.872-3.352-2.48-8.408.872-11.28 2.992-2.567 7.416-2.567 10.408 0l39.998 40c3.096 3.15 3.04 8.215-.112 11.31-1.472 1.44-3.44 2.256-5.488 2.288z" fill="#2D4961"/>
      <Path d="M325.678 210.31c-3.12 3.104-8.16 3.104-11.28 0L280 175.992c-1.504-1.632-4.048-1.744-5.68-.24-1.632 1.504-1.744 4.048-.24 5.68l39.998 39.998c3.072 3.2 8.16 3.312 11.36.24 3.2-3.072 3.304-8.16.24-11.36z" fill="#123247"/>
    </Svg>
  );
}

BadgeA.defaultProps = {
  width: 50,
  height: 50,
  isActive: false
};

BadgeA.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isActive: PropTypes.bool,
  style: PropTypes.number
};

export default BadgeA;