import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateInput = data => {
  let errors = {};

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Enter a title';
  }
  if (Validator.isEmpty(data.headline)) {
    errors.headline = 'Enter a headline';
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = 'Enter a description';
  }
  if (Validator.isEmpty(data.leftingDate)) {
    errors.leftingDate = 'Enter an lefting date';
  }
  if (Validator.isDate(data.leftingDate)) {
    errors.leftingDate = 'Enter a valid date';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateInput;
