import React, { PropTypes } from 'react';
import {
  ListView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import translate from 'utils/translate';
import s from './styles';

const LeftingsList = ({ leftings, isAdmin }) => {
  const createLeftingLink = (
    <Button onPress={() => Actions.createLefting()}>
      {translate('leftings.list.createNew')}
    </Button>
  );

  return (
    <View>
      <ListView
        enableEmptySections
        dataSource={leftings}
        renderRow={lefting => {
          return (
            <TouchableHighlight
              onPress={() => Actions.lefting({ leftingId: lefting._id })}
              underlayColor="#eee"
              style={s.listItem}>
              <View>
                <Text style={s.listItemTitle}>{lefting.description}</Text>
                <Text style={s.listItemHeadline}>{lefting.bookId}</Text>
              </View>
            </TouchableHighlight>
          );
        }}
      />
      <View className="full-content-wrapper">
        {isAdmin && createLeftingLink}
      </View>
    </View>
  );
};

LeftingsList.propTypes = {
  leftings: PropTypes.object,
  isAdmin: PropTypes.bool
};

export default LeftingsList;
