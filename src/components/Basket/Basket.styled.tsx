import { styled } from "styled-components";
import { Link } from "react-router-dom"

export const SectionBasket = styled.section`

  padding: 50px 100px;
  text-align: center;
  h3 {
margin: 0;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.22px;
  }
`;
export const CartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &::after {
    content: "";
    position: absolute;
   bottom: -60px; /* Розміщуємо полоску внизу */
   left: 0; /* Розміщуємо полоску вліво */
   width: 100%; /* Розтягуємо полоску на всю ширину батьківського елемента */
   height: 1px; /* Задаємо висоту полоски */
   background-color: #D0D0D0;
   margin-bottom: 60px;
  
  }
`
export const ClearCartButton = styled.button`
  
  width: 180px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: auto;
  border: none;
  background-color: transparent;
  color: #D0D0D0;
  font-size: 18px;
  &:hover, &:focus{

  border: 1px solid #f26b25;
  outline: transparent;
  border-radius: 32px;
  color: #f26b25;
  fill: #f26b25;
  }
   
`;
export const List = styled.ul`
  
`;
export const Item = styled.li`
 margin-top: 30px;
 position:relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  //margin-bottom: 60px;
  &::after {
    content: "";
    position: absolute;
  bottom: -60px; 
  left: 0; 
  width: 100%; 
  height: 1px; 
  background-color: #D0D0D0;
  margin-bottom: 30px;
  
  }
`;
export const Wrapper = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`
export const PizzaBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Text = styled.p`
  color: #7a7979;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.21px;
`;

export const NumberContainer = styled.div`
 display: flex;
 gap: 15px;
 align-items: center;

`;
export const NumberButton = styled.button`
  color: #f26b25;
  padding: 0px;

  &:hover {
    border: 2px solid #f26b25;
    outline: none;
    background-color: #f26b25;
    color: #fff;
  }
`;
export const Number = styled.span`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.22px;
`;
export const DeleteButton = styled.button`
   padding: 0;
   background-color: transparent;
  &:hover {
    outline: none;
    border-color: transparent;
  }
`;
export const TextOrder = styled.p`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.22px;
`;

export const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:40px;
  margin-top: 60px;
  
`;
export const PaymentContainer = styled.div`
display: flex;
justify-content: space-between;


`
export const PaymentLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
width: 211px;
height: 55px;
border-radius: 30px;
border: 1px solid #D0D0D0;
background-color: #FFF;
color: #D0D0D0;

span{
 font-size: 18px;   
}


&:hover, &:focus{
background-color: #f26b25;
box-shadow: 2px 2px 5px rgba(193, 107, 37);
color: #FFF;
border: 1px solid #f26b25;
outline: transparent;
}
`