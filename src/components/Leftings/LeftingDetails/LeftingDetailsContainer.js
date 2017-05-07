import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { createStructuredSelector } from 'reselect';

import LeftingDetails from './LeftingDetails';
import Preloader from 'common/components/Preloader/Preloader';
import { fetchLeftingsSingle } from 'components/Leftings/Leftings.actions';
import { setClaimBook } from 'components/Claim/Claim.actions';
import {
  selectLefting,
  selectLeftingIsLoading
} from 'components/Leftings/Leftings.selector';
import {
  selectUserLocation
} from 'components/User/Users.selector';
import NavBarMainContainer from 'components/Navigation/NavBarMain/NavBarMainContainer';
import { getDistance } from 'utils/geolocation';

class LeftingDetailsContainer extends Component {

  constructor(props) {
    super(props);

    this.onCheckout = this.onCheckout.bind(this);
  }

  componentDidMount() {
    const { onFetchLeftingsSingle, leftingId } = this.props;

    onFetchLeftingsSingle(leftingId);
  }

  onCheckout() {
    const { onSetClaimBook } = this.props;

    onSetClaimBook();
  }

  render() {
    const { lefting, userLocation, isLoading } = this.props;
    const distance = getDistance(userLocation, lefting.location);
    const bookDistance = distance && distance > 10 ? '>10' : distance;

    return (
      <View>
        <LeftingDetails
          lefting={lefting}
          distance={bookDistance}
          onCheckout={this.onCheckout}
          />
        <Preloader isLoading={isLoading} />
      </View>
    );
  }
}

LeftingDetailsContainer.renderNavigationBar = ({ title }) => {
  return (
    <NavBarMainContainer
      title={title}
      hasBackButton
      />
  );
};

const mapStateToProps = createStructuredSelector({
  lefting: selectLefting(),
  isLoading: selectLeftingIsLoading(),
  userLocation: selectUserLocation()
});

const mapDispatchToProps = dispatch => ({
  onFetchLeftingsSingle: id => {
    dispatch(fetchLeftingsSingle(id));
  },
  onSetClaimBook: () => {
    dispatch(setClaimBook());
  }
});

LeftingDetailsContainer.propTypes = {
  lefting: PropTypes.object.isRequired,
  userLocation: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFetchLeftingsSingle: PropTypes.func.isRequired,
  onSetClaimBook: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftingDetailsContainer);
