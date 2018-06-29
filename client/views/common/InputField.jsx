import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Text from './Text';

const propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({}).isRequired
};

const InputField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <Input {...input} placeholder={label} type={type} />
    {touched && ((error && <Text error>{error}</Text>) || (warning && <span>{warning}</span>))}
  </div>
);

InputField.propTypes = propTypes;
export default InputField;
