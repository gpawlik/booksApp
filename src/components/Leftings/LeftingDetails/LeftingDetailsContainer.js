import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import LeftingDetails from './LeftingDetails';
import Preloader from 'common/components/Preloader/Preloader';
import { getLefting } from 'components/Leftings/Leftings.actions';
import { selectLefting } from 'components/Leftings/Leftings.selector';
import NavBarApp from 'components/Navigation/NavBarApp/NavBarApp';

class LeftingDetailsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
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

  render() {
    return (
      <View>
        {this.state.isLoading && <Preloader />}
        <LeftingDetails
          lefting={this.props.lefting}
          />
      </View>
    );
  }
}

LeftingDetailsContainer.propTypes = {
  lefting: React.PropTypes.object.isRequired,
  getLefting: React.PropTypes.func.isRequired
};

LeftingDetailsContainer.renderNavigationBar = ({ title }) => {
  return <NavBarApp title={title} hasBackButton />;
};

const mapStateToProps = createStructuredSelector({
  lefting: selectLefting()
});

export default connect(mapStateToProps, { getLefting })(LeftingDetailsContainer);
