import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import Login from './Login';
import NavBarApp from 'components/Navigation/NavBarApp/NavBarApp';
import { login } from 'components/Auth/Auth.actions';
import { selectIsAuthenticated } from 'components/Auth/Auth.selector';
import validateInput from 'utils/validations/login';

class LoginContainer extends Component {
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
    return (
      <Login
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        {...this.state}
        />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated()
});

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

LoginContainer.renderNavigationBar = ({ title }) => {
  return <NavBarApp title={title} />;
};

export default connect(mapStateToProps, { login })(LoginContainer);
