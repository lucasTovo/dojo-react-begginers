import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorChange from '../src/ColorChange';

storiesOf('Mudando Cores', module)
    .add('Usando Hooks',() => <ColorChange />);