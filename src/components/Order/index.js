import React from 'react';

import { Container, Item } from './styles';

export default function Order() {
  return (
    <Container>
      <ul>
        <li>
          <h4>Cliente</h4>
          <h2>Fulano</h2>
        </li>
        <li>
          <h4>Endereço</h4>
          <h2>Rua tal, 000 Horizonte Ce</h2>
        </li>
        <li>
          <h4>Itens</h4>
          <Item>
            <h2>1</h2>
            <h2>Mussarela</h2>
            <hr />
            <h2>25,00</h2>
          </Item>
        </li>
        <li>
          <div className="total">
            <h4>Valor total</h4>
            <h2>25,00</h2>
          </div>
          <div className="status">
            <h2>Fazendo</h2>
          </div>
        </li>
      </ul>
    </Container>
  );
}
