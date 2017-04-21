import React, { Component } from 'react';
//import { Text, View } from 'react-native';
import { MapView } from 'react-native';

import s from './styles';

class LeftingsMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };

    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <MapView
        style={s.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      />
    );
  }
}

export default LeftingsMap;
