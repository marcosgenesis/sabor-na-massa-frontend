import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';
import api from '~/services/api';
import { OrderContainer } from './styles';

import { postDetail } from '~/store/modules/post/actions';

import { store } from '~/store';

export default function Order({ data: order }) {
  const dispatch = useDispatch();

  const { token } = store.getState().auth;
  function handleToggleDetail(post) {
    dispatch(postDetail(post));
  }
  async function handleDeleteOrder() {
    try {
      await api.delete(`orders/${order.id}`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
    } catch (error) {
      toast.error('Deu ruim! Não foi possível excluir o pedido');
    }
  }

  return (
    <OrderContainer>
      <li>
        <div className="clientName">
          <h3>{order.client.name}</h3>
          <button
            type="button"
            className="btnSeeMore"
            onClick={() => handleToggleDetail(order)}
          >
            ver mais
          </button>
          <button type="button">
            <FiTrash2 size={20} onClick={handleDeleteOrder} />
          </button>
        </div>
      </li>
    </OrderContainer>
  );
}
