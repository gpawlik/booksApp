import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import TextFieldGroup from 'common/components/TextFieldGroup/TextFieldGroup';
import LoginIcon from 'common/components/Icons/LoginIcon';
import validateInput from 'utils/validations/login';
import translate from 'utils/translate';
import s from './styles';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated } = nextProps;

    if(this.props.isAuthenticated !== isAuthenticated && isAuthenticated) {
      Actions.profileDetails();
    }
  }

  onSubmit(e) {
    e.preventDefault();
    // otherwise we have server-side validation
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props
        .login(this.state)
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
    const { identifier, password, errors, isLoading } = this.state;

    return(
      <View style={s.container}>
        <LoginIcon />
        <Text>{ errors.form }</Text>
        <View style={s.formBox}>
          <TextFieldGroup
            field="identifier"
            label={translate('login.form.label.identifier')}
            placeholder={translate('login.form.label.identifier')}
            value={identifier}
            error={errors.identifier}
            onChange={this.onChange.bind(this, 'identifier')}
            autoCapitalize="none"
            autoCorrect={false}
            />
          <TextFieldGroup
            field="password"
            label={translate('login.form.label.password')}
            placeholder={translate('login.form.label.password')}
            value={password}
            error={errors.password}
            onChange={this.onChange.bind(this, 'password')}
            type="password"
            secureTextEntry
            autoCorrect={false}
            />
          <Button
            containerStyle={s.buttonContainer}
            style={s.button}
            disabled={isLoading}
            onPress={this.onSubmit}
            >
            {translate('login.form.button')}
          </Button>
          <Button
            style={s.registerButton}
            onPress={() => Actions.register()}
            >
            Click here to register
          </Button>
        </View>
      </View>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default LoginForm;
