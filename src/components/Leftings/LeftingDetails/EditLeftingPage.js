import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createStructuredSelector } from 'reselect';

import LeftingForm from './LeftingForm';
import { getLefting, editLefting } from 'components/Leftings/Leftings.actions';
import { addFlashMessage } from 'common/Flash/Flash.actions';
import { selectLefting } from 'components/Leftings/Leftings.selector';
import translate from 'utils/translate';

class EditLeftingPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.leftingId,
      title: '',
      headline: '',
      description: '',
      leftingDate: '',
      errors: {},
      isFormLoading: false,
      isLoading: true
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  componentWillReceiveProps(nextProps) {
    const { title, headline, description, leftingDate } = nextProps.lefting;

    this.setState({
      title,
      headline,
      description,
      leftingDate
    });
  }

  onChange(type, value) {
    this.setState({ [type]: value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .editLefting(this.state)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: translate('messages.leftingEditSuccess'),
          category: 'lefting_edited'
        });
        Actions.leftingsList();
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          isFormLoading: false
        });
      });
  }

  render() {
    return (
      <LeftingForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        buttonText={translate('leftings.edit.buttonText')}
        {...this.state}
      />
    );
  }
}

EditLeftingPage.propTypes = {
  editLefting: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  lefting: selectLefting()
});

export default connect(mapStateToProps, { getLefting, editLefting, addFlashMessage })(EditLeftingPage);
