import React from 'react';
import { connect } from 'react-redux';

import Register from './Register';
import { userSignupRequest, isUserExists } from './Register.actions';
import { addFlashMessage } from 'common/Flash/Flash.actions';

const RegisterContainer = ({ signupRequest, userExists, addMessage }) => {
  return(
    <Register
      userSignupRequest={signupRequest}
      isUserExists={userExists}
      addFlashMessage={addMessage}
      />
  );
};

RegisterContainer.propTypes = {
  signupRequest: React.PropTypes.func.isRequired,
  addMessage: React.PropTypes.func.isRequired
};

export default connect(
  null,
  {
    signupRequest: userSignupRequest,
    userExists: isUserExists,
    addMessage: addFlashMessage
  }
)(RegisterContainer);
