import styled from "styled-components";

export const FooterStyle = styled.footer`
    display: flex;
    gap: 20px;
    flex-direction: column;
    max-width: 1200px;
    justify-content: center;
    padding: 0 50px;
    background-color: #f26b25;
    height: 150px;
    margin-top: 20px;
    color: #231f20;

`
export const Wrapper = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
`
export const ListContacts = styled.ul`
    display: flex;
    gap: 10px;
    flex-direction: column;
       
    li{
     color:#231f20;
      a{
      font-size: 18px; 
      }
     a:hover{
       color: #231f20; 
    }
     }
    `
export const List = styled.ul`
     display: flex;
      gap: 40px;
      
    `
    

    export const Icon = styled.span`
    margin-right: 5px;
     display: flex;
        align-items: center;
 `
export const Text = styled.p`
  
    color: #333;
    font-size: 14px;
    display: flex; 
    align-items: center;
    justify-content: center;
    gap: 2px;
   
 `