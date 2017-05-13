import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { selD } from 'js/business/ui/selectors';
import { set } from 'js/business/ui/actions';
import { goHome } from 'js/business/ui/action-creators';
import Component from './component';

const FORM_NAME = 'form';

const mapStateToProps = state => ({
  d: selD(state),
});

const mapDispatchToProps = {
  goHome,
  onSubmit(values, dispatch) {
    dispatch(set(values.d));
  },
};

function validate(values) {
  const errors = {};
  if (!values.v) {
    errors.v = 'This field could not be empty';
  }
  return errors;
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
  validate,
})(Component));
