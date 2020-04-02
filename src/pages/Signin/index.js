import React from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { Container } from './styles';
import Input from '../../components/Input';
import logo from '../../assets/SVG/logo.svg';
import api from '../../services/api';

export default function Signin() {
  const history = useHistory();

  async function handleSubmit({ username, password }) {
    try {
      const response = await api.post('/sessions', { username, password });
      localStorage.setItem('token', response.data.token);

      history.push('/dashboard');
    } catch (error) {
      toast.error('Deu ruim! tente novamente');
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <Input name="username" placeholder="Username" />
        <Input name="password" placeholder="Password" type="password" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
