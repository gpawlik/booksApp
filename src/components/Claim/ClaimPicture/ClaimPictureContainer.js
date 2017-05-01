import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import ClaimPicture from './ClaimPicture';
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';
import { setClaimInfo } from 'components/Claim/Claim.actions';

class ClaimPictureContainer extends Component {
  constructor(props) {
    super(props);

    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    const options = {};

    this.camera.capture({ metadata: options })
      .then(({ path }) => {
        this.props.setClaimInfo({
          id: 'pictureUrl',
          value: path
        });
        Actions.step3();
      })
      .catch(err => alert(err));
  }

  render() {
    return (
      <ClaimPicture
        takePicture={this.takePicture}
        cameraRef={cam => {
          this.camera = cam;
        }}
      />
    );
  }
}

ClaimPictureContainer.propTypes = {
  setClaimInfo: PropTypes.func.isRequired
};

ClaimPictureContainer.renderNavigationBar = ({ title }) => {
  return <NavBarMain title={title} hasBackButton />;
};

export default connect(null, { setClaimInfo })(ClaimPictureContainer);
