import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 376px;
  height: 100%;
  position: fixed;
  right: 0;
  background: #fff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  h4 {
    font-size: 12px;
    font-weight: bold;
    color: #999;
    margin-top: 15px;
  }
  p {
    font-size: 18px;
  }
  ul {
    width: 100%;
    margin-top: 20px;
    li {
      margin-top: 12px;
      h4 {
        font-size: 12px;
        font-weight: bold;
        color: #999;
      }
      p {
        font-size: 18px;
      }
      .addressFields {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .actions {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      margin-left: 30px;
      width: 147px;
      height: 48px;
      border-radius: 7px;
      text-align: center;
      line-height: 45px;
      background: #00ffba;
      font-weight: bold;
      color: #1bbe92;
      font-size: 16px;
    }
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
`;
