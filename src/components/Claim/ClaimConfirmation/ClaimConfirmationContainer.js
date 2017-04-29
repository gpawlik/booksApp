import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import ClaimConfirmation from './ClaimConfirmation';
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';
import { selectClaim, selectClaimBook } from 'components/Claim/Claim.selector';
import { createLefting } from 'components/Leftings/Leftings.actions';
import { addFlashMessage } from 'common/Flash/Flash.actions';
import translate from 'utils/translate';

// TODO: add client validation
class ClaimConfirmationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { claim } = this.props;

    e.preventDefault();
    this.props
      .createLefting(claim)
      .then(() => {
        /*
        this.props.addFlashMessage({
          type: 'success',
          text: translate('messages.leftingCreateSuccess'),
          category: 'lefting_created'
        });*/
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
    const { claim, book } = this.props;

    return (
      <ClaimConfirmation
        claim={claim}
        book={book}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  claim: selectClaim(),
  book: selectClaimBook()
});

ClaimConfirmationContainer.propTypes = {
  claim: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  createLefting: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

ClaimConfirmationContainer.renderNavigationBar = ({ title }) => {
  return <NavBarMain title={title} hasBackButton />;
};

export default connect(mapStateToProps, { createLefting, addFlashMessage })(ClaimConfirmationContainer);
