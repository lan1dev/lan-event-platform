import { connect } from 'react-redux';

import RegisterForm from '../forms/RegisterForm';
import { registerPostData } from '../../state/register/actions';

/* eslint-disable require-jsdoc */
const mapDispatchToProps = dispatch => ({
  sendForm: (url, fields) => dispatch(registerPostData(url, fields))
});

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs,
  errors: state.register.registerHasError.errorMessages,
  success: state.register.registerPostDataSuccess
});
/* eslint-enable require-jsdoc */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
