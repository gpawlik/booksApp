import React from 'react';
import { connect } from 'react-redux';

import LeftingHistory from './LeftingHistory';
import NavBarApp from 'components/Navigation/NavBarApp/NavBarApp';

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
  return <NavBarApp title={title} hasBackButton />;
};

export default connect(null, null)(LeftingHistoryContainer);
