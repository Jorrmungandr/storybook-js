import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Button',
  decorators: [withKnobs],
  component: Button,
  parameters: {
    notes: 'If you click 3,5 times inside the button it breaks',
  },
};

export const normal = () => (
  <Button {...actions('onClick', 'onMouseOver', 'onMouseLeave')}>Click me!</Button>
);

export const slimShady = () => (
  <Button
    slim={boolean('Slim', true, 'styling')}
    shady={boolean('Shady', true, 'styling')}
    image={boolean('Image', false, 'content')}
  >
    {text('Text', 'Click me!', 'content')}
  </Button>
);

export const darkmode = () => (
  <Button darkmode>Click me!</Button>
);
