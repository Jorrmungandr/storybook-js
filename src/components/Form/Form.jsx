import React, { useState } from 'react';

import Button from '../Button';
import Input from '../Input';
import {
  Title,
  StyledForm,
} from './styles';

function Form({
  title,
  fields = [],
  buttonValue,
  handleSubmit,
}) {
  const [values, setValues] = useState(
    fields.map(({ defaultValue }) => defaultValue || ''),
  );

  const handleChange = (newValue, index) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const preSubmit = (e) => {
    e.preventDefault();
    const results = Object.fromEntries(fields.map(({ name }, i) => [name, values[i]]));
    handleSubmit(results);
  };

  return (
    <StyledForm onSubmit={preSubmit}>
      <Title>{title}</Title>
      {fields.map(({ name, placeholder }, i) => (
        <Input
          key={name}
          value={values[i]}
          setValue={(newValue) => handleChange(newValue, i)}
          placeholder={placeholder}
          required
        />
      ))}
      <Button>{buttonValue}</Button>
    </StyledForm>
  );
}

export default Form;
