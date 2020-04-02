import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { default as CheckCep } from 'cep-promise';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import api from '../../services/api';
import { Container } from './styles';

export default function NewClient() {
  const history = useHistory();
  const token = localStorage.getItem('token');
  async function handleNewClient({ name, phone, CEP, number, nickname }) {
    try {
      const { cep, street, city, state, neighborhood } = await CheckCep(CEP);

      const addresses = [
        { cep, street, city, state, neighborhood, number, nickname },
      ];
      const data = await api.post(
        'clients',
        { name, phone, addresses },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleNewClient}>
        <h2>Novo pedido</h2>
        <Input name="name" placeholder="Nome do cliente" />
        <Input name="phone" placeholder="Numero do cliente" />

        <Input name="CEP" placeholder="CEP do cliente" />
        <Input name="number" placeholder="Número da casa" />
        <Input name="nickname" placeholder="Salvar este endereço como:" />

        <button onSubmit={handleNewClient}>Enviar</button>
      </Form>
    </Container>
  );
}
