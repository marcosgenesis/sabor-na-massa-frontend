import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 120px;
  position: fixed;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #eaeaea;
  img {
    margin-top: 20px;
    padding: 10px;
    width: 100px;
    height: 100px;
  }
`;

export const MenuItem = styled.div`
  margin-top: 20px;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background: #fff;
  box-shadow: ${(props) =>
    props.selected ? '5px 5px 14px 0px rgba(0, 0, 0, 0.09)' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${(props) => (props.selected ? '#ff3131' : '#CBCBCB')};
  }
`;
