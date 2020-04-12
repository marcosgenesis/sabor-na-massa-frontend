import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { signInRequest } from '~/store/modules/auth/actions';
import { Container } from './styles';

import Input from '../../components/Input';
import logo from '../../assets/SVG/logo.svg';

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  async function handleSubmit({ username, password }) {
    dispatch(signInRequest(username, password));
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <Input name="username" placeholder="Username" />
        <Input name="password" placeholder="Password" type="password" />
        <button type="submit">{loading ? 'Carregando' : 'Entrar'}</button>
      </Form>
    </Container>
  );
}
