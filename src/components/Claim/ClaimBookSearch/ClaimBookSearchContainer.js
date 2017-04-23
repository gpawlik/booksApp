import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ListView } from 'react-native';
import { createStructuredSelector } from 'reselect';

import ClaimBookSearch from './ClaimBookSearch';
import { searchBooks } from 'components/Claim/Claim.actions';
import { selectSearchResults } from 'components/Claim/Claim.selector';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

// TODO: add client validation
class ClaimBookSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      booksDataSource: ds.cloneWithRows([])
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.searchResults !== nextProps.searchResults) {
      this.setState({
        booksDataSource: ds.cloneWithRows(nextProps.searchResults)
      });
    }
  }

  onSearchChange(type, value) {
    this.setState({ [type]: value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.searchBooks();
  }

  render() {
    return (
      <ClaimBookSearch
        searchTerm="a"
        results={this.state.booksDataSource}
        onChange={this.onSearchChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  searchResults: selectSearchResults()
});

ClaimBookSearchContainer.propTypes = {
  searchBooks: PropTypes.func.isRequired,
  searchResults: PropTypes.array
};

export default connect(mapStateToProps, { searchBooks })(ClaimBookSearchContainer);
