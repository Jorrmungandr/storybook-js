import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Button',
  decorators: [withKnobs],
  component: Button,
  parameters: {
    notes: 'This is an amazing button!',
  },
};

export const normal = () => (
  <Button>Click me!</Button>
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

export const buttonClick = () => (
  <Button {...actions('onClick', 'onMouseOver')}>
    Click me!
  </Button>
);
