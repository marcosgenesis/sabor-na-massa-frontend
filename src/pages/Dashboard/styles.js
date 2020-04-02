import styled from 'styled-components';

export const Container = styled.div`
  header {
    margin-left: 160px;
    input {
      margin-top: 30px;
      width: 460px;
      height: 61px;
      border-radius: 10px;
      background: #fff;
      border: 1px solid #eaeaea;
      padding: 10px;
    }
  }
  .dashboardActions {
    margin-top: 30px;
    margin-left: 160px;
    display: flex;
    justify-content: space-between;
    a {
      width: 147px;
      height: 48px;
      border-radius: 7px;
      text-align: center;
      line-height: 42px;
      background: #fbcacc;
      font-weight: bold;
      color: #ff3131;
      font-size: 16px;
    }
  }
`;

export const Orders = styled.div`
  margin-left: 160px;
  display: flex;
  justify-content: space-between;
  h3 {
    color: #999999;
    &::before {
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #000;
    }
  }
`;
export const Order = styled.div`
  width: 407px;
  height: 79px;
  background: #fff;
  margin-top: 20px;
  box-shadow: 8px 3px 20px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  padding: 15px;
  ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        background: transparent;
        border: none;
        svg {
          color: #999999;
        }
      }
    }
  }
`;
export const Item = styled.div``;
