import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Register from './Register';
import { userSignupRequest, isUserExists } from './Register.actions';
import { addFlashMessage } from 'common/Flash/Flash.actions';
import validateInput from 'utils/validations/signup';
import translate from 'utils/translate';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      invalid: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  checkUserExists(e) {
    const { name, value } = e.target;

    if (value !== '') {
      this.props
      .isUserExists(value)
      .then(res => {
        let errors = this.state.errors;
        let invalid;

        if (res.data.user) {
          errors[name] = translate('signup.form.error.name') + name;
          invalid = true;
        } else {
          errors[name] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true
      });
      this.props
        .userSignupRequest(this.state)
        .then(() => {
          this.props.addFlashMessage({
            type: 'success',
            text: translate('messages.userCreateSuccess'),
            category: 'user_created'
          });
          Actions.profile();
        })
        .catch(err => {
          this.setState({
            errors: err.response.data,
            isLoading: false
          });
        });
    }
  }

  onChange(type, value) {
    this.setState({ [type]: value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    return(
      <Register
        checkUserExists={this.checkUserExists}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        {...this.state}
        />
    );
  }
}

RegisterContainer.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    userSignupRequest,
    isUserExists,
    addFlashMessage
  }
)(RegisterContainer);
