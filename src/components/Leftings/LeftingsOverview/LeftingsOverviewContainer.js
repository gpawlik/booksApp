import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { createStructuredSelector } from 'reselect';

import { getLeftings } from './../Leftings.actions';
import { selectLeftings } from 'components/Leftings/Leftings.selector';
import LeftingsOverview from './LeftingsOverview';
import NavBarMain from 'components/Navigation/NavBarMain/NavBarMain';

class LeftingsOverviewContainer extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows([]),
      view: 'list'
    };
    this.toggleView = this.toggleView.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.leftings !== nextProps.leftings) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.setState({
        dataSource: ds.cloneWithRows(nextProps.leftings)
      });
    }
  }

  componentDidMount() {
    this.props.getLeftings()
      .then(() => {
        this.setState({ isLoading: false });
      });
  }

  toggleView() {
    const currentView = this.state.view;
    const newView = currentView === 'map' ? 'list' : 'map';

    this.setState({
      view: newView
    });
  }

  render() {
    return (
      <LeftingsOverview
        leftings={this.state.dataSource}
        state={this.state.view}
        isLoading={this.state.isLoading}
        toggleView={this.toggleView}
      />
    );
  }
}

LeftingsOverviewContainer.propTypes = {
  leftings: React.PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  leftings: selectLeftings()
});
/*
LeftingsOverviewContainer.renderNavigationBar = () => {
  return <NavBarMain />;
};*/

export default connect(mapStateToProps, { getLeftings })(LeftingsOverviewContainer);
