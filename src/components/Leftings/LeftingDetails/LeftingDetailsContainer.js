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
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';

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
    const { lefting, isLoading } = this.props;

    return (
      <View>
        <LeftingDetails
          lefting={lefting}
          onCheckout={this.onCheckout}
          />
        <Preloader isLoading={isLoading} />
      </View>
    );
  }
}

LeftingDetailsContainer.renderNavigationBar = ({ title }) => {
  return (
    <NavBarMain
      title={title}
      hasBackButton
      />
  );
};

const mapStateToProps = createStructuredSelector({
  lefting: selectLefting(),
  isLoading: selectLeftingIsLoading()
});

const mapDispatchToProps = dispatch => ({
  onFetchLeftingsSingle: () => {
    dispatch(fetchLeftingsSingle());
  },
  onSetClaimBook: () => {
    dispatch(setClaimBook());
  }
});

LeftingDetailsContainer.propTypes = {
  lefting: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFetchLeftingsSingle: PropTypes.func.isRequired,
  onSetClaimBook: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftingDetailsContainer);
