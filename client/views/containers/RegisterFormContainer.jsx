import { connect } from 'react-redux';

import RegisterForm from '../forms/RegisterForm';
import { userRegisterRequest } from '../../state/register/actions';
import { getRegisterErrors, isLoginSuccessful } from '../../state/register/selectors';

const mapDispatchToProps = dispatch => ({
  sendForm: (url, fields) => dispatch(userRegisterRequest(url, fields))
});

const mapStateToProps = state => ({
  errors: getRegisterErrors(state),
  success: isLoginSuccessful(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
