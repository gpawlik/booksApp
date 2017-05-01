import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Camera from 'react-native-camera';

import s from './styles';

export default ({ cameraRef, takePicture }) => {
  return (
    <View style={s.contentWrapper}>
      <Camera
        ref={cameraRef}
        style={s.preview}
        aspect={Camera.constants.Aspect.fill}>
        <TouchableHighlight style={s.capture} onPress={takePicture}>
          <Text>[CAPTURE]</Text>
        </TouchableHighlight>
      </Camera>
    </View>
  );
};
