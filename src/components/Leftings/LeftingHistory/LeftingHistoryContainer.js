import React from 'react';
import { connect } from 'react-redux';

import LeftingHistory from './LeftingHistory';
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';

class LeftingHistoryContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LeftingHistory />
    );
  }
}

LeftingHistoryContainer.renderNavigationBar = ({ title }) => {
  return <NavBarMain title={title} hasBackButton />;
};

export default connect(null, null)(LeftingHistoryContainer);
