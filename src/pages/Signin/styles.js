import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    padding: 60px;
    width: 100%;
    height: 527px;
    max-width: 540px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    button {
      margin-top: 15px;
      width: 100%;
      height: 61px;
      background: #ff3131;
      border: none;
      border-radius: 5px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      color: white;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
`;
