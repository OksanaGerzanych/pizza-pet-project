import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerNoPage = styled.div`
    text-align: center;
    padding:50px;
`
export const Title = styled.h1`
    font-size: 86px;
    margin-bottom:20px;
    color: #f06d24;
`

export const TextUp = styled.p`
   text-transform: uppercase;
    font-size: 20px;
    margin-bottom:20px;

`
export const LinkStyle = styled(Link)`
   padding: 15px;
   display: flex;
   gap: 5px;
   justify-content: center;
   align-items: center;
   width: 150px;
   border-radius: 32px;
   border: 1px solid #ef854ba8;
   margin: 50px auto 20px;
   background-color: #f26b25;
   box-shadow: 2px 2px 5px rgba(193, 107, 37);
  
   color: #fff;
   text-transform: uppercase;
`