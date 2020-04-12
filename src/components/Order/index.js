import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';
import { OrderContainer } from './styles';

import { postDetail } from '~/store/modules/post/actions';

export default function Order({ data: order }) {
  const [subtotal, setSubtotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    order.items.map((item) => {
      return setSubtotal(subtotal + item.price * item.qtd);
    });
  }, []);

  function handleToggleDetail(post) {
    dispatch(postDetail(post));
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
            <FiTrash2 size={20} />
          </button>
        </div>
      </li>
    </OrderContainer>
  );
}
