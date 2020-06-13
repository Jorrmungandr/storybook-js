import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

Form.propTypes = {
  /** The string that will appear on top of the form */
  title: PropTypes.string,
  /** The fields that should appear as inputs */
  fields: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    placeholder: PropTypes.string,
  })),
  /** The submit button value */
  buttonValue: PropTypes.string,
  /** The submit function, that receives the fields as parameters */
  handleSubmit: PropTypes.func,
};

Form.defaultProps = {
  title: 'Amazing Form!',
  fields: [
    { name: 'example', placeholder: 'Example' },
  ],
  buttonValue: 'Send',
  handleSubmit: ({ example }) => { console.log(example); },
};

export default Form;
