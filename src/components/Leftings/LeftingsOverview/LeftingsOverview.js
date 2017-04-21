import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';

import LeftingsList from 'common/components/LeftingsList/LeftingsList';
import LeftingsMap from 'common/components/LeftingsMap/LeftingsMap';
import Preloader from 'common/components/Preloader/Preloader';
import s from './styles';

const LeftingsOverview = ({ leftings, state, isLoading, toggleView }) => {
  const ViewHandler = state === 'map' ? LeftingsMap : LeftingsList;

  return (
    <View>
      {isLoading && <Preloader />}
      <View style={s.toggleButtonBox}>
        <Button
          onPress={toggleView}
          style={s.toggleButton}
          containerStyle={s.buttonContainer}>
        </Button>
      </View>
      <ViewHandler
        leftings={leftings}
        />
    </View>
  );
};

LeftingsOverview.propTypes = {
  leftings: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  toggleView: PropTypes.func.isRequired
};


export default LeftingsOverview;
