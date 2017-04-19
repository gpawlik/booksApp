import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import EditUserProfileForm from './EditUserProfileForm';
import { getUser, editUser } from 'components/User/Users.actions';
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
        location: '',
        interests: []
      },
      errors: {},
      isFormLoading: false,
      isLoading: true
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelectInterest = this.onSelectInterest.bind(this);
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

  onSelectInterest(id) {
    this.setState({
      user: {
        ...this.state.user,
        interests: this.toggleInterests(id)
      }
    });
  }

  toggleInterests(interestId) {
    const currentInterests = this.state.user.interests;
    const newInterests = currentInterests ? currentInterests.slice() : [];
    const existingIndex = newInterests.indexOf(interestId);

    if(existingIndex === -1) {
      newInterests.push(interestId);
    } else {
      newInterests.splice(existingIndex, 1);
    }
    return newInterests;
  }

  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    const { _id, username, email, location, interests } = nextProps.user;

    this.setState({
      user: {
        id: _id,
        username,
        email,
        location,
        interests
      }
    });
  }

  fetchUserData(userId) {
    this.props.getUser(userId).then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <EditUserProfileForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onSelectInterest={this.onSelectInterest}
        {...this.state}
        />
    );
  }
}

EditProfileContainer.propTypes = {
  getUser: React.PropTypes.func.isRequired,
  editUser: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  user: selectUser()
});

export default connect(mapStateToProps, { getUser, editUser, addFlashMessage })(EditProfileContainer);
