import React from 'react';
import PropTypes from 'prop-types';
import { ListView, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import Button from 'react-native-button';

import BookSearchBox from 'common/components/BookSearchBox/BookSearchBox';
import BookSearchItem from 'common/components/BookSearchItem/BookSearchItem';
import s from './styles';

const ClaimBookSearch = ({
  searchTerm, results, onChange,
  onSelectItem, onSearch, onSubmit,
  isFormValid
}) => {
  return (
    <View style={s.container}>
      <View style={s.section}>

        <BookSearchBox
          searchTerm={searchTerm}
          placeholder="Search by title, author or ISBN"
          onChange={onChange}
          onSearch={onSearch}
          />

        <Text style={s.sectionTitle}>
          Book results
        </Text>

        <ScrollView style={s.resultsBox}>
          <ListView
            enableEmptySections
            dataSource={results}
            renderRow={({
              id, best_book, original_publication_year,
              average_rating, selected
            }, type, index) => {
              return (
                <TouchableHighlight
                  onPress={onSelectItem.bind(this, type, index)}
                  underlayColor="#dedede">
                  <View>
                    <BookSearchItem
                      title={best_book[0].title[0]}
                      author={best_book[0].author[0].name[0]}
                      imageUrl={best_book[0].small_image_url[0]}
                      publishDate={original_publication_year[0]._}
                      rating={average_rating[0]}
                      isSelected={selected}
                      />
                  </View>
                </TouchableHighlight>
              );
            }}
          />
        </ScrollView>
      </View>
      <Button
        onPress={onSubmit}
        style={s.searchButton}
        disabled={!isFormValid}
        styleDisabled={{opacity: .5}}
        >
        Go to step 2
      </Button>
    </View>
  );
};

ClaimBookSearch.propTypes = {
  searchTerm: PropTypes.string,
  results: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired
};

export default ClaimBookSearch;
