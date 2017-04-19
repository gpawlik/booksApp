import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import { login as loginAction } from 'components/Auth/Auth.actions';

class LoginContainer extends React.Component {
  render() {
    return (
      <Login login={this.props.login} />
    );
  }
}

LoginContainer.propTypes = {
  login: React.PropTypes.func.isRequired
};

export default connect(null, { login: loginAction })(LoginContainer);
