import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import LeftingDetails from './LeftingDetails';
import Preloader from 'common/components/Preloader/Preloader';
import { getLefting } from 'components/Leftings/Leftings.actions';
import { setClaimBook } from 'components/Claim/Claim.actions';
import { selectLefting } from 'components/Leftings/Leftings.selector';
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';

class LeftingDetailsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };

    this.onCheckout = this.onCheckout.bind(this);
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

  onCheckout() {
    this.props.setClaimBook();
  }

  render() {
    return (
      <View>
        <LeftingDetails
          lefting={this.props.lefting}
          onCheckout={this.onCheckout}
          />
        {this.state.isLoading && <Preloader />}
      </View>
    );
  }
}

LeftingDetailsContainer.propTypes = {
  lefting: React.PropTypes.object.isRequired,
  getLefting: React.PropTypes.func.isRequired
};

LeftingDetailsContainer.renderNavigationBar = ({ title }) => {
  return <NavBarMain title={title} hasBackButton />;
};

const mapStateToProps = createStructuredSelector({
  lefting: selectLefting()
});

export default connect(mapStateToProps, { getLefting, setClaimBook })(LeftingDetailsContainer);
