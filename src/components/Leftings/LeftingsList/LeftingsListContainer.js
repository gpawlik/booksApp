import React from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import { createStructuredSelector } from 'reselect';

import LeftingsList from './LeftingsList';
import Preloader from 'common/components/Preloader/Preloader';
import { getLeftings } from './../Leftings.actions';
import { selectLeftings } from 'components/Leftings/Leftings.selector';
import { selectAuthUser } from 'components/Auth/Auth.selector';

class LeftingsListContainer extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows([])
    };
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

  render() {
    return (
      <View>
        {this.state.isLoading && <Preloader />}
        <LeftingsList
          leftings={this.state.dataSource}
          isAdmin={this.props.user.isAdmin} />
      </View>
    );
  }
}

LeftingsListContainer.propTypes = {
  leftings: React.PropTypes.array.isRequired,
  user: React.PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  leftings: selectLeftings(),
  user: selectAuthUser()
});

export default connect(mapStateToProps, { getLeftings })(LeftingsListContainer);
