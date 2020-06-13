import React from 'react';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Form from './Form';

export default {
  title: 'Form',
  decorators: [withKnobs, withInfo],
  component: Form,
  parameters: {
    notes: 'The only possible field type is text input',
  },
};

export const normal = () => (
  <Form
    fields={object('Fields', [
      { name: 'name', placeholder: 'Name' },
      { name: 'surname', placeholder: 'Surname' },
      { name: 'age', placeholder: 'Age' },
    ])}
    buttonValue={text('Button Value', 'Send')}
    title={text('Title', 'Amazing Form!!')}
    handleSubmit={(results) => console.log(results)}
  />
);
