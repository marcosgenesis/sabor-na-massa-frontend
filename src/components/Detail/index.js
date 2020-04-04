import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Item } from './styles';

export default function Detail() {
  return (
    <Container>
      <h2>Detalhes</h2>
      <ul>
        <li>
          <h4>Cliente</h4>
          <p>a</p>
        </li>
        <li>
          <h4>Endereço</h4>
          <p>Rua Horizonte</p>
          <div className="addressFields">
            <p>121</p>
            <p>Planalto HOrizonte</p>
          </div>
        </li>
        <li>
          <h4>Telefone</h4>
          <p>85 994143397</p>
        </li>
      </ul>
      <ul>
        <h4>Itens</h4>
        <Item>
          <p>1</p>
          <p>Mussarela</p>
          <p>13,50</p>
        </Item>
      </ul>
      <div className="actions">
        <a href="/">Whastapp</a>
        <div className="subtotal">
          <h4>Valor total</h4>
          <p>R$ 50,00</p>
        </div>
      </div>
    </Container>
  );
}
