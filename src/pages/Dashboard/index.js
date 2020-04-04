import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Orders, Board } from './styles';
import api from '../../services/api';
import SideBar from '../../components/SideBar';
import Order from '../../components/Order';
import Detail from '../../components/Detail';

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
        <Board badgeColor="#FF3131">
          <div className="boardTitle">
            <span />
            <h2>Para fazer</h2>
          </div>
          {orders.map((order) =>
            order.status === 'Não Feita' ? (
              <Order clientName={order.client.name} items={order.items} />
            ) : null
          )}
        </Board>
        <Board badgeColor="#FFD500">
          <div className="boardTitle">
            <span />
            <h2>Fazendo</h2>
          </div>
          {orders.map((order) =>
            order.status === 'Fazendo' ? (
              <Order clientName={order.client.name} items={order.items} />
            ) : null
          )}
        </Board>
        <Board badgeColor="#00FFBA">
          <div className="boardTitle">
            <span />
            <h2>Feito</h2>
          </div>
          {orders.map((order) =>
            order.status === 'Feito' ? (
              <Order clientName={order.client.name} items={order.items} />
            ) : null
          )}
        </Board>
      </Orders>
    </Container>
  );
}
