import {
  SectionBasket,
  List,
  Item,
  PizzaBox,
  Text,
  ClearCartButton,
  NumberButton,
  DeleteButton,
  TextOrder,
  OrderContainer,
    Number,
    NumberContainer,
    Wrapper,
    PaymentContainer,
  CartContainer,
  PaymentLink,
} from "./Basket.styled";
import { NamePizza } from "../PizzaCard/PizzaCard.styled";
import { TiDeleteOutline } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsArrowLeftCircle, BsCart4} from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import pizza from "../../img/pizza-d.png";

export default function Basket() {
  return (

    
      <SectionBasket>
  
          <CartContainer>
        <h2><BsCart4 /> Cart </h2>  
      <ClearCartButton>
        <RiDeleteBinLine size={20} /> Clear cart
        </ClearCartButton>
          </CartContainer>
      <List>
              <Item>
            <Wrapper>     
          <img src={pizza} alt="pizza" width="150" height="150" />
          
            <PizzaBox>
            <NamePizza>Bianka</NamePizza>
            <Text>Vegetarian, 25cm</Text>
            </PizzaBox>
            </Wrapper> 
          <NumberContainer>
            <NumberButton>
              <AiOutlineMinusCircle size={32} />
            </NumberButton>
            <Number>1</Number>
            <NumberButton>
              <AiOutlinePlusCircle size={32} />
            </NumberButton>
          </NumberContainer>
          <Number>350 UA</Number>
          <DeleteButton>
            <TiDeleteOutline size={40} fill="#D0D0D0" />
          </DeleteButton>
        </Item>
      </List>
      <OrderContainer>
        <TextOrder>Number of pizzas: <Number>5 pieces</Number> </TextOrder>
        <TextOrder>Order amount: <Number>1200 UA</Number> </TextOrder>
      </OrderContainer>
      <PaymentContainer>
        <PaymentLink to="/"> <BsArrowLeftCircle size={20}/> <span> Go back</span> </PaymentLink>
        <PaymentLink><span>Payment</span></PaymentLink>
      </PaymentContainer>
    </SectionBasket>
  );
}
