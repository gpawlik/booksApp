import React from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import { createStructuredSelector } from 'reselect';

import LeftingsList from 'common/components/LeftingsList/LeftingsList';
import Preloader from 'common/components/Preloader/Preloader';
import { fetchLeftings } from 'components/Leftings/Leftings.actions';
import {
  selectLeftings,
  selectLeftingsIsLoading
} from 'components/Leftings/Leftings.selector';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class UserLeftingsListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.leftings !== nextProps.leftings) {

      this.setState({
        dataSource: ds.cloneWithRows(nextProps.leftings)
      });
    }
  }

  componentDidMount() {
    const { onFetchLeftings } = this.props;

    onFetchLeftings();
  }

  render() {
    const { isLoading } = this.props;

    return (
      <View>
        <LeftingsList
          leftings={this.state.dataSource}
          />
        <Preloader isLoading={isLoading} />
      </View>
    );
  }
}

UserLeftingsListContainer.propTypes = {
  leftings: React.PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  leftings: selectLeftings(),
  isLoading: selectLeftingsIsLoading()
});

const mapDispatchToProps = dispatch => ({
  onFetchLeftings: () => {
    dispatch(fetchLeftings());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLeftingsListContainer);
