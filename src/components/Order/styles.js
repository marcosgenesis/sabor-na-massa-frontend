import styled from 'styled-components';

export const Container = styled.div`
  width: 443px;
  height: 500px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    padding: 20px;
    width: 100%;
    li {
      h4 {
        color: #999;
        font-weight: normal;
      }
      h2 {
        color: #333;
      }
      &:last-child {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .status {
          width: 174px;
          height: 43px;
          border-radius: 5px;
          background: #ffcc00;
          line-height: 43px;
          text-align: center;
          h2 {
            color: white;
            font-weight: normal;
          }
        }
      }
    }
  }
`;
export const Item = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  hr {
    width: 180px;
    height: 1px;
    border: 1px dashed #999;
  }
`;
