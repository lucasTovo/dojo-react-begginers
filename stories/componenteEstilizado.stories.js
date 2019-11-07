import React from 'react';
import { storiesOf } from '@storybook/react';
import Transition from '../src/Transition';
import Rotate from '../src/Rotate';

storiesOf('Componentes Estilizados', module)
  .add('Transition', () => <Transition />)
  .add('Rotate', () => <Rotate />);
