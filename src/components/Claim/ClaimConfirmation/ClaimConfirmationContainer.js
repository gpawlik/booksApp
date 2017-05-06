import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import ClaimConfirmation from './ClaimConfirmation';
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';
import { selectClaim, selectClaimBook } from 'components/Claim/Claim.selector';
import { selectUserLocation } from 'components/User/Users.selector';
import { createLefting } from 'components/Leftings/Leftings.actions';

class ClaimConfirmationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { claim, onCreateLefting } = this.props;

    onCreateLefting(claim)
      .then(() => {
        Actions.leftings();
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          isFormLoading: false
        });
      });
  }

  render() {
    const { claim, book, location } = this.props;

    return (
      <ClaimConfirmation
        claim={claim}
        book={book}
        location={location}
        onSubmit={this.onSubmit}
      />
    );
  }
}

ClaimConfirmationContainer.renderNavigationBar = ({ title }) => {
  return (
    <NavBarMain
      title={title}
      hasBackButton
      />
  );
};

const mapStateToProps = createStructuredSelector({
  claim: selectClaim(),
  book: selectClaimBook(),
  location: selectUserLocation()
});

const mapDispatchToProps = dispatch => {
  return {
    onCreateLefting: () => {
      dispatch(createLefting());
    }
  };
};

ClaimConfirmationContainer.propTypes = {
  claim: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onCreateLefting: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ClaimConfirmationContainer);
