import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import { OrderContainer, Item } from './styles';

export default function Order(props) {
  let orderSubtotal = 0;
  const [visible, setVisible] = useState(false);
  function handleToggleVisible() {
    setVisible(!visible);
  }
  return (
    <OrderContainer visible={visible}>
      <li>
        <div className="clientName">
          <h3>{props.clientName}</h3>
          <button type="button" onClick={handleToggleVisible}>
            ver mais
          </button>
          <button type="button">
            <FiTrash2 size={20} />
          </button>
        </div>
      </li>
      {visible ? (
        <>
          <li>
            {props.items.map((item) => {
              orderSubtotal += item.qtd * item.price;
              return (
                <Item key={item.id}>
                  <p>{item.qtd}</p>
                  <p>{item.title}</p>
                  <p>
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.price)}
                  </p>
                </Item>
              );
            })}
          </li>
          <li>
            <h2>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(orderSubtotal)}
            </h2>
          </li>
        </>
      ) : null}
    </OrderContainer>
  );
}
