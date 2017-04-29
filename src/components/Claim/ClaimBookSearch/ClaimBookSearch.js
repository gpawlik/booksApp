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
              title, author, imageUrl,
              publishDate, rating, selected
            }, type, index) => {
              return (
                <TouchableHighlight
                  onPress={onSelectItem.bind(this, type, index)}
                  underlayColor="#dedede">
                  <View>
                    <BookSearchItem
                      title={title}
                      author={author}
                      imageUrl={imageUrl}
                      publishDate={publishDate}
                      rating={rating}
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
