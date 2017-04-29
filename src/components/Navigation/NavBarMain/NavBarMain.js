import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { ChevronIcon, CogIcon, CrossIcon, Logo } from 'common/components/Icons';
import s from './styles';

const NavBarMain = ({ hasBackButton, hasSettingsButton, hasCloseButton, onClose }) => {
  const backButton = (
    <TouchableOpacity style={s.backButton} onPress={() => Actions.pop()}>
      <ChevronIcon />
    </TouchableOpacity>
  );
  const settingsButton = (
    <TouchableOpacity style={s.rightButton} onPress={() => Actions.settings()}>
      <CogIcon />
    </TouchableOpacity>
  );
  const closeButton = (
    <TouchableOpacity style={s.rightButton} onPress={onClose}>
      <CrossIcon />
    </TouchableOpacity>
  );

  return (
    <View style={s.container}>
      <View style={s.content}>
        <Logo style={s.logo} />
        {hasBackButton && backButton}
        {hasSettingsButton && settingsButton}
        {hasCloseButton && closeButton}
      </View>
    </View>
  );
};

NavBarMain.propTypes = {
  hasBackButton: PropTypes.bool,
  hasSettingsButton: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  onclose: PropTypes.func
};

export default NavBarMain;
