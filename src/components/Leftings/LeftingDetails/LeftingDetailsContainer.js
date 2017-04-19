import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import LeftingDetails from './LeftingDetails';
import Preloader from 'common/components/Preloader/Preloader';
import { getLefting, deleteLefting } from 'components/Leftings/Leftings.actions';
import { selectLefting } from 'components/Leftings/Leftings.selector';
import { selectAuthUser } from 'components/Auth/Auth.selector';

class LeftingDetailsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
    this.deleteLefting = this.deleteLefting.bind(this);
  }

  componentDidMount() {
    this.props
      .getLefting(this.props.leftingId)
      .then(() => {
        this.setState({ isLoading: false });
      })
      .catch(() => {
        Actions.error();
      });
  }

  deleteLefting(leftingId) {
    this.props.deleteLefting(leftingId).then(() => {
      Actions.leftingsList();
    });
  }

  render() {
    return (
      <View>
        {this.state.isLoading && <Preloader />}
        <LeftingDetails
          lefting={this.props.lefting}
          deleteLefting={this.deleteLefting}
          isAdmin={this.props.authUser.isAdmin} />
      </View>
    );
  }
}

LeftingDetailsContainer.propTypes = {
  lefting: React.PropTypes.object.isRequired,
  getLefting: React.PropTypes.func.isRequired,
  deleteLefting: React.PropTypes.func.isRequired,
  authUser: React.PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  lefting: selectLefting(),
  authUser: selectAuthUser()
});

export default connect(mapStateToProps, { getLefting, deleteLefting })(LeftingDetailsContainer);
