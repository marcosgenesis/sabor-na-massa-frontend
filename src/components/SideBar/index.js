import React from 'react';
import { FiClipboard, FiUsers, FiFileText } from 'react-icons/fi';
import { Container, MenuItem } from './styles';
import logo from '../../assets/SVG/logo.svg';

export default function SideBar() {
  return (
    <Container>
      <img src={logo} alt="" />
      <MenuItem selected>
        <FiClipboard size={35} />
      </MenuItem>
      <MenuItem>
        <FiUsers size={35} />
      </MenuItem>
      <MenuItem>
        <FiFileText size={35} />
      </MenuItem>
    </Container>
  );
}
