import React, { PropTypes } from 'react';
import {
  ListView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import s from './styles';

const LeftingsList = ({ leftings }) => {
  return (
    <View style={s.container}>
      <ListView
        enableEmptySections
        dataSource={leftings}
        renderRow={lefting => {
          return (
            <TouchableHighlight
              onPress={() => Actions.lefting({ leftingId: lefting._id })}
              underlayColor="#eee"
              style={s.item}>
              <View>
                <View style={s.itemPicture}></View>
                <View style={s.itemInfo}>
                  <Text style={s.itemTitle}>{lefting.description}</Text>
                  <Text style={s.itemHeadline}>{lefting.bookId}</Text>
                </View>
              </View>
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};

LeftingsList.propTypes = {
  leftings: PropTypes.object.isRequired
};

export default LeftingsList;
