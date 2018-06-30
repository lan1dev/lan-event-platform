import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { sessionLoginRequest } from '../../state/session/actions';
import { getLoginErrors } from '../../state/session/selectors';
import { getUser } from '../../state/user/selectors';

/* eslint-disable require-jsdoc */
const mapDispatchToProps = dispatch => ({
  sendForm: (url, fields) => dispatch(sessionLoginRequest(url, fields))
});

const mapStateToProps = state => ({
  isLoggedIn: getUser(state).isLoggedIn,
  errors: getLoginErrors(state)
});
/* eslint-enable require-jsdoc */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
