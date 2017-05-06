import React, { PropTypes } from 'react';
import { View } from 'react-native';

import LeftingsList from 'common/components/LeftingsList/LeftingsList';
import LeftingsMap from 'common/components/LeftingsMap/LeftingsMap';
import Preloader from 'common/components/Preloader/Preloader';
import EmptyView from 'common/components/EmptyView';

const LeftingsOverview = ({ leftings, state, isLoading, isEmpty, toggleView }) => {
  const ViewHandler = state === 'map' ? LeftingsMap : LeftingsList;

  return (
    <View>
      {!isEmpty && <ViewHandler leftings={leftings} />}
      <Preloader
        isLoading={isLoading}
        />
      <EmptyView
        isVisible={isEmpty}
        text="No results found..."
        />
    </View>
  );
};

/*

<View style={s.toggleButtonBox}>
  <Button
    onPress={toggleView}
    style={s.toggleButton}
    containerStyle={s.buttonContainer}>

  </Button>
</View>
*/

LeftingsOverview.propTypes = {
  leftings: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  toggleView: PropTypes.func.isRequired
};


export default LeftingsOverview;
