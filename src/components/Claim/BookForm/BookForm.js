import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import TextFieldGroup from 'common/components/TextFieldGroup/TextFieldGroup';
import translate from 'utils/translate';

const BookForm = ({
  title, author, isbn,
  errors, onChange
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
        field="author"
        label={'Author'}
        value={author}
        error={errors.author}
        onChange={onChange.bind(this, 'author')}
        />

      <TextFieldGroup
        field="isbn"
        label={'isbn'}
        value={isbn}
        error={errors.isbn}
        onChange={onChange.bind(this, 'isbn')}
        />
    </View>
  );
};

BookForm.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default BookForm;
