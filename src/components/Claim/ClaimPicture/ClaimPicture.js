import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import Camera from 'react-native-camera';

import { CameraIcon } from 'common/components/Icons';
import s from './styles';

export default ({ cameraRef, takePicture }) => {
  return (
    <View style={s.contentWrapper}>
      <Camera
        ref={cameraRef}
        style={s.preview}
        aspect={Camera.constants.Aspect.fill}>
        <TouchableHighlight
          style={s.capture}
          underlayColor="transparent"
          onPress={takePicture}
          >
          <View>
            <CameraIcon />
          </View>
        </TouchableHighlight>
      </Camera>
    </View>
  );
};
