import React from 'react';

import User from '../../components/User';
import Header from '../../components/Header';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <User />
    </Container>
  );
}
