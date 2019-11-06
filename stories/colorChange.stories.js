import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorChange from '../src/ColorChange';

storiesOf('Color Change', module)
    .add('Mudando Cores',() => <ColorChange />);