import React from 'react';
import { storiesOf } from '@storybook/react';
import Inheritance from '../src/ComponenteComum';

storiesOf('Componentes Comuns', module)
  .add('Pai e Filho', () => <Inheritance />);