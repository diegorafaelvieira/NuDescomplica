import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderArea } from "../css/style";

export const Header = () => {
  return (
    <HeaderArea>
      <Link to="/">Loja</Link>
      <Link to="/cart">Carrinho</Link>
    </HeaderArea>
  )
}