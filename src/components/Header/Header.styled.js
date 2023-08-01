import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(35, 31, 32, 0.25);
  padding-bottom: 40px;
  padding-top: 40px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  gap: 17px;
`;

export const Logo = styled.img`
  display: flex;
  width: 65px;
  height: 55px;
`;

export const LogoText = styled.p`
  color: #a19fa1;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerCart = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 30px;
  box-shadow: 2px 2px 5px rgba(193, 107, 37);
  background: #f26b25;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CartPrice = styled.p`
  /* position: "relative"; */
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 10px;
  /* &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-left: 5px;
    transform: translateY(-50%);
    height: 80%;
    border: 1px solid rgba(35, 31, 32, 255);
  } */
`;

export const CartNumber = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 5px;
`;
