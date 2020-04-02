import React from 'react';

import { Form } from '@unform/web';
import Input from '../../components/Input';
import { Container } from './styles';

export default function UpdateClient() {
  return (
    <Container>
      <Form>
        <h2>Novo pedido</h2>
        <Input name="name" placeholder="Nome do cliente" />
        <Input name="phone" placeholder="Numero do cliente" />

        <Input name="CEP" placeholder="CEP do cliente" />
        <Input name="number" placeholder="Número da casa" />
        <Input name="nickname" placeholder="Salvar este endereço como:" />

        <button>Enviar</button>
      </Form>
    </Container>
  );
}
