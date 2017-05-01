import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { ChevronIcon, CogIcon, CrossIcon, Logo } from 'common/components/Icons';
import s from './styles';

const NavBarMain = ({ hasBackButton, hasSettingsButton, hasCloseButton, hasActionButton, actionText, onClose, onAction, onBack }) => {
  const backButton = (
    <TouchableOpacity style={s.backButton} onPress={() => {
      return onBack ? onBack() : Actions.pop();
    }}>
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
  const actionButton = (
    <TouchableOpacity style={s.rightButton} onPress={onAction}>
      <Text>{actionText}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={s.container}>
      <View style={s.content}>
        <Logo style={s.logo} />
        {hasBackButton && backButton}
        {hasSettingsButton && settingsButton}
        {hasCloseButton && closeButton}
        {hasActionButton && actionButton}
      </View>
    </View>
  );
};

NavBarMain.propTypes = {
  hasBackButton: PropTypes.bool,
  hasSettingsButton: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  hasActionButton: PropTypes.bool,
  actionText: PropTypes.string,
  onClose: PropTypes.func,
  onAction: PropTypes.func,
  onBack: PropTypes.func
};

export default NavBarMain;
