import React from 'react';
import PropTypes from 'prop-types';

import {
  TextInput,
} from './styles';

function Input({
  value,
  setValue,
  placeholder,
  ...other
}) {
  return (
    <TextInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      {...other}
    />
  );
}

Input.propTypes = {
  /** The value of the input, normally a state variable */
  value: PropTypes.string.isRequired,
  /** The setState function to change the value */
  setValue: PropTypes.func.isRequired,
  /** The text that will appear when the input is empty */
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Type Something',
};

export default Input;
