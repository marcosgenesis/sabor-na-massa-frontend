import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .actions {
    width: 40vw;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    a {
      width: 30%;
      border-radius: 5px;
      text-align: center;
      line-height: 50px;
      color: white;
      font-weight: bold;
      background: linear-gradient(
        to right,
        rgba(226, 57, 105, 1) 0%,
        rgba(253, 172, 73, 1) 100%
      );
      &:hover {
        opacity: 0.7;
      }
    }
  }
  form {
    padding: 30px;
    width: 40vw;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    h2 {
      text-align: center;
      margin-bottom: 30px;
      color: #333;
    }
    button {
      width: 100%;
      height: 44px;
      border: none;
      border-radius: 5px;
      background: rgba(226, 57, 105, 1);
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }
    .react-select__control {
      margin-bottom: 20px;
    }
    .itens {
      margin-top: 25px;
      .itensHeader {
        margin: 25px 0px;
        display: flex;
        justify-content: space-between;
        .btnNewItem {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: none;
          border-radius: 5px;
          width: 100px;
          height: 30px;
          font-weight: normal;
          font-size: 16px;
          background: transparent;
          color: rgba(226, 57, 105, 1);
          font-weight: bold;
          &:hover {
            opacity: 0.7;
          }
        }
      }
      .item {
        .sabor {
          margin-left: 10px;
          width: 100%;
        }
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
