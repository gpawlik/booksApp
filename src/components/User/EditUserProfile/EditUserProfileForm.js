import React from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';

import TextFieldGroup from 'common/components/TextFieldGroup/TextFieldGroup';
import translate from 'utils/translate';

const EditUserProfileForm = ({ user, errors, onChange, onSubmit }) => {
  return (
    <View>
      <TextFieldGroup
        field="username"
        label={translate('users.edit.form.label.username')}
        value={user.username}
        error={errors.username}
        onChange={onChange.bind(this, 'username')}
        />
      <TextFieldGroup
        field="email"
        label={translate('users.edit.form.label.email')}
        value={user.email}
        error={errors.email}
        onChange={onChange.bind(this, 'email')}
      />
      <TextFieldGroup
        field="location"
        label={translate('users.edit.form.label.location')}
        value={user.location}
        error={errors.location}
        onChange={onChange.bind(this, 'location')}
      />
      <Button onPress={onSubmit}>
        {translate('users.edit.form.saveButton')}
      </Button>
    </View>
  );
};

EditUserProfileForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  errors: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default EditUserProfileForm;
