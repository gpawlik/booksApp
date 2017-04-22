import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import TextFieldGroup from 'common/components/TextFieldGroup/TextFieldGroup';
import LoginIcon from 'common/components/Icons/LoginIcon';

import translate from 'utils/translate';
import s from './styles';

const Login = ({ identifier, password, errors, isLoading, onChange, onSubmit }) => {
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
          onChange={onChange.bind(this, 'identifier')}
          autoCapitalize="none"
          autoCorrect={false}
          />
        <TextFieldGroup
          field="password"
          label={translate('login.form.label.password')}
          placeholder={translate('login.form.label.password')}
          value={password}
          error={errors.password}
          onChange={onChange.bind(this, 'password')}
          type="password"
          secureTextEntry
          autoCorrect={false}
          />
        <Button
          containerStyle={s.buttonContainer}
          style={s.button}
          disabled={isLoading}
          onPress={onSubmit}
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
};

Login.propTypes = {
  identifier: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Login;
