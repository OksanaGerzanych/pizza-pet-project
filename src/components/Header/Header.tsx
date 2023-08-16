import logo from "../../img/pizza-logo.png";
import { BsCart4 } from 'react-icons/bs';
import { Link } from "react-router-dom";

import { HeaderStyle, ContainerLogo, Logo, ContainerName, LogoText, ContainerCart, CartPrice, CartNumber } from "./Header.styled";

export default function Header() {
  return (
    <HeaderStyle>
      <Link to="/">
      <ContainerLogo>
        <Logo src={logo} alt="logo" />
        <ContainerName>
          <h1>Dragons pizza</h1>
          <LogoText>the best pizza of the world</LogoText>
        </ContainerName>
        </ContainerLogo>
      </Link>
      <Link to="/basket">
      <ContainerCart>
       
          <CartPrice>210grn</CartPrice>   
          <BsCart4 />
          <CartNumber>3</CartNumber>
       
        </ContainerCart>
      </Link>
    </HeaderStyle>
  );
}
