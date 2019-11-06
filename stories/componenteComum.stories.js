import React from 'react';
import { storiesOf } from '@storybook/react';
import MeuComponenteClassudo from '../src/Examples/Inheritance/MeuComponenteClassudo';

storiesOf('Componentes Comuns', module)
  .add('Pai e Filho', () => <MeuComponenteClassudo />);