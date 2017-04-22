import React from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';

import TextFieldGroup from 'common/components/TextFieldGroup/TextFieldGroup';
import SignupIcon from 'common/components/Icons/SignupIcon';

import translate from 'utils/translate';
import s from './styles';

const Register = ({
  username, email, password,
  passwordConfirmation, errors,
  isLoading, invalid, checkUserExists,
  onChange, onSubmit
}) => {
  return(
    <View style={s.container}>
      <SignupIcon />
      <View style={s.formBox}>
        <TextFieldGroup
          field="username"
          label={translate('signup.form.label.username')}
          placeholder={translate('signup.form.label.username')}
          value={username}
          error={errors.username}
          onChange={onChange.bind(this, 'username')}
          checkUserExists={checkUserExists}
          />
        <TextFieldGroup
          field="email"
          label={translate('signup.form.label.email')}
          placeholder={translate('signup.form.label.email')}
          value={email}
          error={errors.email}
          onChange={onChange.bind(this, 'email')}
          checkUserExists={checkUserExists}
          type="email"
          />
        <TextFieldGroup
          field="password"
          label={translate('signup.form.label.password')}
          placeholder={translate('signup.form.label.password')}
          value={password}
          error={errors.password}
          onChange={onChange.bind(this, 'password')}
          type="password"
          secureTextEntry
          />
        <TextFieldGroup
          field="passwordConfirmation"
          label={translate('signup.form.label.repeatPassword')}
          placeholder={translate('signup.form.label.repeatPassword')}
          value={passwordConfirmation}
          error={errors.passwordConfirmation}
          onChange={onChange.bind(this, 'passwordConfirmation')}
          type="password"
          secureTextEntry
          />
        <Button
          onPress={onSubmit}
          containerStyle={s.buttonContainer}
          style={s.button}
          disabled={isLoading || invalid}>
          {translate('signup.form.button')}
        </Button>
      </View>
    </View>
  );
};

Register.propTypes = {
  username: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  passwordConfirmation: React.PropTypes.string.isRequired,
  errors: React.PropTypes.object.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  invalid: React.PropTypes.bool.isRequired
};

export default Register;
