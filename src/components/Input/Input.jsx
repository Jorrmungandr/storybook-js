import React from 'react';
import {
  TextInput,
} from './styles';

function Input({
  value,
  setValue,
  placeholder,
}) {
  return (
    <TextInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default Input;
