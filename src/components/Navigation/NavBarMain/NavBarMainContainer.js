import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMessage } from 'components/Messages/selector';
import { removeMessage } from 'components/Messages/actions';
import NavBarMain from './NavBarMain';

class NavBarMainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.message !== nextProps.message) {
      setTimeout(this.props.onRemoveMessage, 5000);
    }
  }

  render() {
    return (
      <NavBarMain {...this.props} />
    );
  }
}

NavBarMainContainer.propTypes = {
  message: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  message: selectMessage()
});

const mapDispatchToProps = dispatch => {
  return {
    onRemoveMessage: () => {
      dispatch(removeMessage());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarMainContainer);
