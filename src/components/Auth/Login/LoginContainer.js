import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Login from './Login';
import { login as loginAction } from 'components/Auth/Auth.actions';
import { selectIsAuthenticated } from 'components/Auth/Auth.selector';

class LoginContainer extends React.Component {
  render() {
    return (
      <Login
        login={this.props.login}
        isAuthenticated={this.props.isAuthenticated}
        />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated()
});

LoginContainer.propTypes = {
  login: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, { login: loginAction })(LoginContainer);
