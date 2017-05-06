import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { createStructuredSelector } from 'reselect';

import {
  setUserLocation
} from 'components/User/Users.actions';
import {
  fetchLeftings,
  changeView
} from './../Leftings.actions';
import {
  selectLeftings,
  selectLeftingsIsLoading,
  selectLeftingsView
} from 'components/Leftings/Leftings.selector';
import LeftingsOverview from './LeftingsOverview';
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';
import { getGeolocation } from 'utils/geolocation';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class LeftingsOverviewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows([])
    };
    this.toggleView = this.toggleView.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.leftings !== nextProps.leftings) {
      this.setState({
        dataSource: ds.cloneWithRows(nextProps.leftings)
      });
    }
  }

  componentDidMount() {
    const { onFetchLeftings, onSetUserLocation } = this.props;

    onFetchLeftings();

    getGeolocation()
      .then(({ coords }) => {
        onSetUserLocation({
          longitude: coords.longitude,
          latitude: coords.latitude
        });
      });
  }

  toggleView() {
    const { view, changeView: change } = this.props;
    const newView = view === 'map' ? 'list' : 'map';

    change(newView);
  }

  render() {
    const { isLoading, view } = this.props;
    const { dataSource } = this.state;

    return (
      <LeftingsOverview
        leftings={dataSource}
        state={view}
        isLoading={isLoading}
        toggleView={this.toggleView}
      />
    );
  }
}

LeftingsOverviewContainer.propTypes = {
  leftings: PropTypes.array.isRequired,
  onFetchLeftings: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  leftings: selectLeftings(),
  isLoading: selectLeftingsIsLoading(),
  view: selectLeftingsView()
});

const mapDispatchToProps = dispatch => {
  return {
    onFetchLeftings: () => {
      dispatch(fetchLeftings());
    },
    onChangeView: view => {
      dispatch(changeView(view));
    },
    onSetUserLocation: position => {
      dispatch(setUserLocation(position));
    }
  };
};

LeftingsOverviewContainer.renderNavigationBar = () => {
  return <NavBarMain />;
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftingsOverviewContainer);
