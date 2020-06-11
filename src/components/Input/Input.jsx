import React from 'react';
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

export default Input;
