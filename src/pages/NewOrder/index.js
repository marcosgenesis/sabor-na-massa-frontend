import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import { FiPlusCircle } from 'react-icons/fi';

import Input from '../../components/Input';
import Search from '../../components/Search';
import SideBar from '../../components/SideBar';
import api from '../../services/api';
import history from '../../services/history';

import { Container, SendButton } from './styles';

import { store } from '~/store';

export default function NewOrder() {
  const [clients, setClients] = useState([]);

  const [clientAddress, setClientAddress] = useState({});
  const [addressVisible, setaddressVisible] = useState(true);

  const [InputsItems, setInputsItems] = useState([]);
  const [totalInputItems, setTotalInputItems] = useState(1);

  const [flavorsOptions] = useState([
    {
      label: 'Pizzas',
      options: [
        {
          value: { title: 'Catupiresa', price: 25.7, tag: 'Pizza' },
          label: 'Catupiresa',
        },
        {
          value: { title: 'Baiana', price: 25.7, tag: 'Pizza' },
          label: 'Baiana',
        },
        {
          value: { title: 'Frango c/ Catupiry', price: 25.7, tag: 'Pizza' },
          label: 'Frango c/ Catupiry',
        },
        {
          value: { title: 'Portuguesa', price: 25.7, tag: 'Pizza' },
          label: 'Portuguesa',
        },
        {
          value: { title: 'Maravilha', price: 25.7, tag: 'Pizza' },
          label: 'Maravilha',
        },
        {
          value: { title: 'Mista', price: 25.7, tag: 'Pizza' },
          label: 'Mista',
        },
        {
          value: { title: 'Bauru', price: 25.7, tag: 'Pizza' },
          label: 'Bauru',
        },
        {
          value: { title: 'Caipira', price: 25.7, tag: 'Pizza' },
          label: 'Caipira',
        },
      ],
    },
    {
      label: 'Esfirras',
      options: [
        {
          value: { title: 'Carne', price: 25.7, tag: 'Esfirras' },
          label: 'Carne',
        },
        {
          value: { title: 'Calabresa', price: 25.7, tag: 'Esfirras' },
          label: 'Calabresa',
        },
        {
          value: { title: 'Chocolate', price: 25.7, tag: 'Esfirras' },
          label: 'Chocolate',
        },
        {
          value: { title: 'Prestígio', price: 25.7, tag: 'Esfirras' },
          label: 'Prestígio',
        },
      ],
    },
  ]);

  const { token } = store.getState().auth;
  useEffect(() => {
    async function loadClients() {
      const response = await api.get('clients', {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
      const data = response.data.data.map((client) => ({
        value: client,
        label: client.name,
      }));
      setClients(data);
    }

    loadClients();
  }, [token]);

  function loadClientAddress(client) {
    const data = client.addresses.map((address) => ({
      value: address,
      label: address.nickname,
    }));
    setaddressVisible(false);
    return data;
  }

  async function handleNewOrder({ client, address, items, obs }) {
    console.tron.log({ client, address, items, obs });

    const { id: client_id } = client;
    const { id: client_address_id } = address;
    console.tron.log(address);
    let subtotal = 0;
    items.map((item) => {
      subtotal += item.qtd * item.flavor.price;
      return subtotal;
    });

    const response = await api.post(
      'orders',
      { client_id, client_address_id, obs, subtotal },
      {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      }
    );
    const { id: order_id } = response.data;

    items.map(async ({ qtd, flavor }) => {
      const { title, tag, price } = flavor;
      await api.post(
        `orders/${order_id}/items`,
        { qtd, title, tag, price },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      console.tron.log(response.data);
    });
    history.push('/dashboard');
  }
  return (
    <Container>
      <SideBar />
      <header>
        <input name="search" placeholder="Pesquisar" />
      </header>
      <div className="dashboardActions">
        <h1>Novo Pedido</h1>
        <Link to="/newOrder">Novo Cliente</Link>
      </div>
      <Form onSubmit={handleNewOrder}>
        <Search
          placeholder="Cliente"
          name="client"
          options={clients}
          onChange={(e) => setClientAddress(loadClientAddress(e.value))}
        />

        <Search
          placeholder="endereço"
          name="address"
          options={clientAddress}
          isDisabled={addressVisible}
        />
        <Input name="obs" placeholder="Observações" />
        <div className="itens">
          <div className="itensHeader">
            <h3>Pedidos</h3>
            <button
              className="btnNewItem"
              type="button"
              onClick={() => {
                setInputsItems([...InputsItems, totalInputItems]);
                setTotalInputItems(totalInputItems + 1);
              }}
            >
              <FiPlusCircle />
              Novo item
            </button>
          </div>
          {InputsItems.map((index) => (
            <div className="item" key={index}>
              <Scope path={`items[${index - 1}]`}>
                <Input name="qtd" placeholder="QTD" />
                <Search
                  placeholder="Escolha o sabor"
                  name="flavor"
                  options={flavorsOptions}
                  className="sabor"
                />
              </Scope>
            </div>
          ))}
        </div>
        <SendButton type="submit" onSubmit={handleNewOrder}>
          Criar Pedido
        </SendButton>
      </Form>
    </Container>
  );
}
