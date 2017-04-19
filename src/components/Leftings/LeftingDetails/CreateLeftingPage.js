import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { createLefting } from './../Leftings.actions';
import { addFlashMessage } from 'common/Flash/Flash.actions';
import LeftingForm from './LeftingForm';
import translate from 'utils/translate';

// TODO: add client validation
class CreateLeftingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      headline: '',
      description: '',
      leftingDate: '',
      errors: {},
      isFormLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(type, value) {
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
      <LeftingForm
        onSubmit={() => Actions.step3()}
        onChange={this.onChange}
        buttonText={translate('leftings.create.buttonText')}
        {...this.state}
      />
    );
  }
}

CreateLeftingPage.propTypes = {
  createLefting: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

export default connect(null, { createLefting, addFlashMessage })(CreateLeftingPage);
