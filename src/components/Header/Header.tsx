import logo from "../../img/pizza-logo.png";
import {BsCart4} from 'react-icons/bs'
import { HeaderStyle, ContainerLogo, Logo, ContainerName, LogoText, ContainerCart, CartPrice, CartNumber } from "./Header.styled";

export default function Header() {
  return (
    <HeaderStyle>
      <ContainerLogo>
        <Logo src={logo} alt="logo" />
        <ContainerName>
          <h1>Dragon pizza</h1>
          <LogoText>the best pizza of the world</LogoText>
        </ContainerName>
      </ContainerLogo>
      <ContainerCart>
        <a href="">
          <CartPrice>210grn</CartPrice>   
          <BsCart4 />
          <CartNumber>3</CartNumber>
        </a>
      </ContainerCart>
    </HeaderStyle>
  );
}
