import React from 'react';
import PropTypes from 'prop-types';
import { ListView, ScrollView, Text, TextInput, View } from 'react-native';
import Button from 'react-native-button';

import s from './styles';

const ClaimBookSearch = ({ searchTerm, results, onChange, onSubmit }) => {
  return (
    <View style={s.container}>

      <View style={s.section}>
        <TextInput
          onChangeText={onChange}
          value={searchTerm}
          placeholder="Search by title, author or ISBN"
        />

        <ScrollView style={s.container}>
          <ListView
            enableEmptySections
            dataSource={results}
            renderRow={result => {
              return (
                <Text>Here result item</Text>
              );
            }}
          />
        </ScrollView>
      </View>
      <Button onPress={onSubmit}>Search!</Button>
    </View>
  );
};

ClaimBookSearch.propTypes = {
  claim: PropTypes.object.isRequired,
  onClaimChange: PropTypes.object.isRequired,
  onSubmit: PropTypes.object.isRequired
};

export default ClaimBookSearch;
