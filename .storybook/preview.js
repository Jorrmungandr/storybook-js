import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';

addDecorator(withInfo({ source: false }));