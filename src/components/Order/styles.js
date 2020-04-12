import styled from 'styled-components';

export const OrderContainer = styled.ul`
  width: 407px;
  margin-top: 10px;
  background: #fff;
  box-shadow: 8px 3px 20px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  padding: 20px;
  cursor: grab;
  .clientName {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background: transparent;
      border: none;
      color: #999;
      display: block;
      width: 30px;
      height: 30px;
      &:hover {
        color: #333;
      }
    }
    .btnSeeMore {
      width: 90px;
    }
    a {
      color: #999;
    }
  }
  li + li {
    margin-top: 20px;
  }
  h2 {
    color: #999;
  }
`;
