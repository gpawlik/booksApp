import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import ClaimConfirmation from './ClaimConfirmation';
import { createLefting } from 'components/Leftings/Leftings.actions';
import { addFlashMessage } from 'common/Flash/Flash.actions';
import translate from 'utils/translate';

// TODO: add client validation
class ClaimConfirmationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      isbn: '',
      errors: {},
      isFormLoading: false
    };

    this.onClaimChange = this.onClaimChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onClaimChange(type, value) {
    this.setState({ [type]: value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .createLefting(this.state)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: translate('messages.leftingCreateSuccess'),
          category: 'lefting_created'
        });
        Actions.leftingsList();
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          isFormLoading: false
        });
      });
  }

  render() {
    return (
      <ClaimConfirmation
        claim={this.state}
        onClaimChange={this.onClaimChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

ClaimConfirmationContainer.propTypes = {
  createLefting: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(null, { createLefting, addFlashMessage })(ClaimConfirmationContainer);
