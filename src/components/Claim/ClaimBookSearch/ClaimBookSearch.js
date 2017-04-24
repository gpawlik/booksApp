import React from 'react';
import PropTypes from 'prop-types';
import { ListView, ScrollView, Text, TextInput, View } from 'react-native';
import Button from 'react-native-button';

import BookSearchItem from 'common/components/BookSearchItem/BookSearchItem';
import s from './styles';

const ClaimBookSearch = ({ searchTerm, results, onChange, onSubmit }) => {
  return (
    <View style={s.container}>
      <View style={s.section}>
        <Text style={s.sectionTitle}>
          Search books
        </Text>
        <View style={s.searchBox}>
          <TextInput
            onChangeText={onChange}
            value={searchTerm}
            placeholder="Search by title, author or ISBN"
            style={s.searchInput}
          />
        </View>

        <ScrollView style={s.resultsBox}>
          <ListView
            enableEmptySections
            dataSource={results}
            renderRow={result => {
              return (
                <BookSearchItem
                  title={result.best_book[0].title[0]}
                  author={result.best_book[0].author[0].name[0]}
                  imageUrl={result.best_book[0].small_image_url[0]}
                  />
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
  searchTerm: PropTypes.string,
  results: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ClaimBookSearch;
