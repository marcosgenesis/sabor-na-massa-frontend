import styled from 'styled-components';

export const Container = styled.div`
  header {
    margin-left: 160px;
    input {
      margin-top: 30px;
      width: 460px;
      height: 61px;
      border-radius: 10px;
      background-color: #fff;
      border: 1px solid #eaeaea;
      padding: 10px;
    }
  }
  .dashboardActions {
    margin-top: 30px;
    margin-left: 160px;
    display: flex;
    align-items: center;
    a {
      margin-left: 30px;
      width: 147px;
      height: 48px;
      border-radius: 7px;
      text-align: center;
      line-height: 45px;
      background: #fbcacc;
      font-weight: bold;
      color: #ff3131;
      font-size: 16px;
    }
  }
  form {
    margin-left: 160px;
    width: 50%;
    padding: 30px;
    background: #fff;
    display: flex;
    flex-direction: column;
  }
  .itens {
    .itensHeader {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      button {
        width: 85px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .item {
      display: flex;
      justify-content: space-between;
      input {
        width: 12%;
      }
      .sabor {
        width: 85%;
      }
    }
  }
`;
export const SendButton = styled.button`
  width: 50%;
  height: 42px;
  border: none;
  border-radius: 5px;
  background: #fbcacc;
  color: #ff3131;
  font-weight: bold;
  font-size: 18px;
  margin-top: 30px;
  align-self: center;
`;
