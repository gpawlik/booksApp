import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';

import TextFieldGroup from 'common/components/TextFieldGroup/TextFieldGroup';
import translate from 'utils/translate';

const LeftingForm = ({
  title,
  headline,
  description,
  leftingDate,
  errors,
  onChange,
  onSubmit,
  isFormLoading,
  buttonText
}) => {
  return (
    <View>
      <TextFieldGroup
        field="title"
        label={translate('leftings.edit.form.label.title')}
        value={title}
        error={errors.title}
        onChange={onChange.bind(this, 'title')}
        />

      <TextFieldGroup
        field="headline"
        label={translate('leftings.edit.form.label.headline')}
        value={headline}
        error={errors.headline}
        onChange={onChange.bind(this, 'headline')}
        />

      <TextFieldGroup
        field="description"
        label={translate('leftings.edit.form.label.description')}
        value={description}
        error={errors.description}
        onChange={onChange.bind(this, 'description')}
        multiline
        />

      <TextFieldGroup
        field="leftingDate"
        label={translate('leftings.edit.form.label.date')}
        value={leftingDate}
        error={errors.leftingDate}
        onChange={onChange.bind(this, 'leftingDate')}
        placeholder="YYYY/MM/DD"
        />

      <Button onPress={onSubmit} disabled={isFormLoading}>{buttonText}</Button>
    </View>
  );
};

LeftingForm.propTypes = {
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  leftingDate: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default LeftingForm;
