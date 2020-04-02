import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import { FiPlusCircle } from 'react-icons/fi';
import Input from '../../components/Input';
import Search from '../../components/Search';
import api from '../../services/api';
import { Container } from './styles';

export default function NewOrder() {
  const token = localStorage.getItem('token');
  const history = useHistory();
  const [clients, setClients] = useState([]);

  const [clientAddress, setClientAddress] = useState({});
  const [addressVisible, setaddressVisible] = useState(true);

  const [InputsItems, setInputsItems] = useState([]);
  const [totalInputItems, setTotalInputItems] = useState(1);

  const [flavorsOptions, setFlavorsOptions] = useState([
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

  useEffect(() => {
    async function loadClients() {
      const response = await api.get('clients', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data.data.map((client) => ({
        value: client,
        label: client.name,
      }));
      setClients(data);
    }

    loadClients();
  }, []);
  function loadClientAddress(client) {
    const data = client.addresses.map((address) => ({
      value: address,
      label: address.nickname,
    }));
    setaddressVisible(false);
    return data;
  }
  async function handleNewOrder({ items, client, address, obs }) {
    const { id: client_id } = client;
    const { id: client_address_id } = address;
    let subtotal = 0;

    items.map((item) => {
      subtotal += item.flavor.price * item.qtd;
      return subtotal;
    });

    const response = await api.post(
      'orders',
      { client_id, client_address_id, obs, subtotal },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.id);
    const { id: order_id } = response.data;
    items.map(async ({ qtd, flavor }) => {
      const { title, tag, price } = flavor;
      await api.post(
        `orders/${order_id}/items`,
        { qtd, title, tag, price },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    });
    history.push('/dashboard');
  }
  return (
    <Container>
      <div className="actions">
        <Link to="/newClient">Novo Cliente</Link>
        <Link to="/updateClient">Editar Cliente</Link>
        <Link to="/newFlavor">Novo sabor</Link>
      </div>
      <Form onSubmit={handleNewOrder}>
        <h2>Novo pedido</h2>
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
              <Scope path={`items[${index}]`}>
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
        <button onSubmit={handleNewOrder}>Enviar</button>
      </Form>
    </Container>
  );
}
