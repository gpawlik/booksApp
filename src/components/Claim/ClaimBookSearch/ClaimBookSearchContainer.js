import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ListView } from 'react-native';
import { createStructuredSelector } from 'reselect';

import ClaimBookSearch from './ClaimBookSearch';
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';
import { searchBooks, setClaimBook } from 'components/Claim/Claim.actions';
import { selectSearchResults, selectSearchFormValid } from 'components/Claim/Claim.selector';

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
    this.onSelectItem = this.onSelectItem.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.searchResults !== nextProps.searchResults) {
      this.setState({
        booksDataSource: ds.cloneWithRows(nextProps.searchResults)
      });
    }
  }

  onSearchChange(value) {
    this.setState({ searchTerm: value });
  }

  onSearch(e) {
    e.preventDefault();
    this.props.searchBooks(this.state.searchTerm);
  }

  onSelectItem(value, index) {
    this.props.setClaimBook(index);
  }

  render() {
    const { isFormValid } = this.props;

    return (
      <ClaimBookSearch
        searchTerm={this.state.searchTerm}
        results={this.state.booksDataSource}
        onChange={this.onSearchChange}
        onSelectItem={this.onSelectItem}
        onSearch={this.onSearch}
        onSubmit={() => Actions.step2()}
        isFormValid={isFormValid}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  searchResults: selectSearchResults(),
  isFormValid: selectSearchFormValid()
});

ClaimBookSearchContainer.propTypes = {
  searchBooks: PropTypes.func.isRequired,
  searchResults: PropTypes.array
};

ClaimBookSearchContainer.renderNavigationBar = ({ title }) => {
  return <NavBarMain title={title} />;
};

export default connect(mapStateToProps, { searchBooks, setClaimBook })(ClaimBookSearchContainer);
