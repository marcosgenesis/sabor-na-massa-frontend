import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:none;
    box-sizing:border-box;
  }
  *:focus{
    outline:none;
  }
  html,body,#root{
    height: 100%;
  }
  body{
    -webkit-font-smoothing:antialiased;
    background:#FAFBFD;
  }
  body,input,button{
    font: 14px 'Roboto',sans-serif;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
  button{
    cursor:pointer;
  }
`;
