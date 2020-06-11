import React, { useState } from 'react';

import Input from './Input';

import intro from './notes/introduction.md';
import design from './notes/design.md';
import output from './notes/output.md';

export default {
  title: 'Input',
  component: Input,
  parameters: {
    notes: { Props: intro, 'Design Notes': design, Output: output },
  },
};


export const Normal = () => {
  const [text, setText] = useState('');

  return (
    <Input value={text} setValue={setText} placeholder="Amazing Input!" />
  );
};
