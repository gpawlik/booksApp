import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import EditUserProfileForm from './EditUserProfileForm';
import { editUser } from 'components/User/Users.actions';
import { addFlashMessage } from 'common/Flash/Flash.actions';
import { selectUser } from 'components/User/Users.selector';
import translate from 'utils/translate';

class EditProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: '',
        username: '',
        email: '',
        location: ''
      },
      errors: {},
      isFormLoading: false,
      isLoading: true
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(type, value) {
    this.setState({
      user: {
        ...this.state.user,
        [type]: value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .editUser(this.state.user)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: translate('messages.userEditSuccess'),
          category: 'user_edited'
        });
        Actions.pop();
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          isFormLoading: false
        });
      });
  }

  componentDidMount() {
    this.updateState(this.props.user);
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps.user);
  }

  updateState(props) {
    const { _id, username, email, location } = props;

    this.setState({
      user: {
        id: _id,
        username,
        email,
        location
      }
    });
  }

  render() {
    return (
      <EditUserProfileForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        {...this.state}
        />
    );
  }
}

EditProfileContainer.propTypes = {
  editUser: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  user: selectUser()
});

export default connect(mapStateToProps, { editUser, addFlashMessage })(EditProfileContainer);
