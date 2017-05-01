import React, { PropTypes } from 'react';
import {
  ListView,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import Rating from 'common/components/Rating/Rating';
import s from './styles';

const LeftingsList = ({ leftings }) => {
  return (
    <View style={s.container}>
      <ScrollView>
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
                  <View style={s.itemPicture}>
                    <Text style={s.itemBookTitle}>{'El millor dels mons'.toUpperCase()}</Text>
                    <View style={s.itemBookAuthorBox}>
                      <Text style={s.itemBookAuthor}>{'Quim Monzó'.toUpperCase()}</Text>
                    </View>
                  </View>
                  <View style={s.itemInfo}>
                    <View style={s.itemIcon}></View>
                    <Text style={s.itemDate}>{'1.4km from you'}</Text>
                    <View style={s.infoSection}>
                      <Rating stars={4.5} />
                    </View>
                    <Button style={s.button}>show</Button>
                  </View>
                </View>
              </TouchableHighlight>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

LeftingsList.propTypes = {
  leftings: PropTypes.object.isRequired
};

export default LeftingsList;
