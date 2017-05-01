import React, { PropTypes } from 'react';
import {
  Image,
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
            if(!lefting.book) return null;
            return (
              <TouchableHighlight
                onPress={() => Actions.lefting({ leftingId: lefting._id })}
                underlayColor="#eee"
                style={s.item}>
                <View>
                  <View style={s.pictureBox}>
                    <Image style={s.picture} source={{uri: lefting.book.pictureUrl }} />
                    <View style={s.itemInfoBox}>
                      <Text style={s.itemBookTitle}>{lefting.book.title.toUpperCase()}</Text>
                      <View style={s.itemBookAuthorBox}>
                        <Text style={s.itemBookAuthor}>{lefting.book.author.toUpperCase()}</Text>
                      </View>
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
