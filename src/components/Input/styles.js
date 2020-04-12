import styled from 'styled-components';

export const InputField = styled.input`
  height: 42px;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  margin-top: 10px;
  &::placeholder {
    color: #cbcbcb;
  }
  &:hover {
    border-color: #999;
  }
  &:focus {
    border: 2px solid rgba(226, 57, 105, 1);
  }
`;
