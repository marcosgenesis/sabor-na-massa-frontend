import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Item } from './styles';

export default function Detail() {
  const { post } = useSelector((state) => state.post);
  return (
    <Container>
      <h2>Detalhes</h2>
      {post ? (
        <>
          <ul>
            <li>
              {console.tron.log(post)}
              <h4>Cliente</h4>
              <p>{post.client.name}</p>
            </li>
            <li>
              <h4>Rua</h4>
              <p>{post.address.street}</p>
            </li>
            <li>
              <h4>Bairro</h4>
              <p>{post.address.neighborhood}</p>
            </li>
            <li className="addressFields">
              <div>
                <h4>CEP</h4>
                <p>{post.address.cep}</p>
              </div>
              <div>
                <h4>Número</h4>
                <p>{post.address.number}</p>
              </div>
            </li>
          </ul>
          <ul>
            <h4>Itens</h4>
            {post.items.map((item) => (
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
            ))}
          </ul>
          <div className="actions">
            {post.status !== 'Feito' ? (
              'Pedido ainda não finalizado!'
            ) : (
              <a
                href={`https://api.whatsapp.com/send?phone=${post.client.phone}&text=${post.client.name}, Seu pedido já está pronto!`}
              >
                Whastapp
              </a>
            )}

            <div className="subtotal">
              <h4>Valor total</h4>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(post.subtotal)}
              </p>
            </div>
          </div>
        </>
      ) : (
        'Nenhum post'
      )}
    </Container>
  );
}
