import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import { Container, Orders, Order, Item } from './styles';
import logo from '../../assets/SVG/logo.svg';
import api from '../../services/api';
import SideBar from '../../components/SideBar';
import Input from '../../components/Input';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    async function loadPosts() {
      const response = await api.get('orders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(response.data.data);
    }
    loadPosts();
  }, []);
  return (
    <Container>
      <SideBar selected="dashboard" />
      <header>
        <input name="search" placeholder="Pesquisar" />
      </header>
      <div className="dashboardActions">
        <h1>Pedidos em andamento</h1>
        <Link to="/newOrder">Novo Pedido</Link>
      </div>
      <Orders>
        <ul>
          <h3>Para fazer</h3>
          {orders.map((order) => (
            <Order key={order.id} orderstatus={order.status}>
              <ul>
                <li>
                  <h3>{order.client.name}</h3>
                  <button type="button">
                    <FiTrash2 size={20} />
                  </button>
                </li>
              </ul>
            </Order>
          ))}
        </ul>
        <ul>
          <h3>Para fazer</h3>
        </ul>
        <ul>
          <h3>Para fazer</h3>
        </ul>
      </Orders>
      {/* <div className="orders">
        {orders.map((order) => (
          <Order key={order.id} orderstatus={order.status}>
            <ul>
              <li>
                <h4>Cliente</h4>
                <h2>{order.client.name}</h2>
              </li>
              <li>
                <h4>Endereço</h4>
                <h2>
                  {order.address.street}, {order.address.number}
                </h2>
              </li>
              <li>
                <h4>Itens</h4>
                {order.items.map((item) => (
                  <Item key={item.id}>
                    <h2>{item.qtd}</h2>
                    <h2>{item.title}</h2>

                    <h2>
                      {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(item.price)}
                    </h2>
                  </Item>
                ))}
              </li>
              <li>
                <div className="total">
                  <h4>Valor total</h4>
                  <h2>
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(order.subtotal)}
                  </h2>
                </div>
                <div className="status" orderstatus={order.status}>
                  <h2>{order.status}</h2>
                </div>
              </li>
            </ul>
          </Order>
        ))}
      </div> */}
    </Container>
  );
}
