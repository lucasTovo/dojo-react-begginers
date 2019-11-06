import React from 'react';
import { storiesOf } from '@storybook/react';
import Transition from '../src/Examples/Transition';
import Rotate from '../src/Examples/Rotate';

storiesOf('Componentes Estilizados', module)
  .add('Transition', () => <Transition />)
  .add('Rotate', () => <Rotate />);
