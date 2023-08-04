import { styled } from "styled-components";

export const CardPizza = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  border: 1px solid #cccccc;
  box-shadow: 2px rgba(136, 136, 136, 1);
  border-radius: 5px;
  background: #f9f9f9;
  padding: 20px;
`;
export const NamePizza = styled.h3`
  color: #000;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.2px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const ContainerChoosePizza = styled.div`
  width: 290px;
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: #f3f3f3;
  margin-bottom: 20px;
`;
export const ListSize = styled.ul`
  display: flex;
  gap: 20px;

  color: #2c2c2c;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.21px;
`;
export const Item = styled.li`
  cursor: pointer;
  padding: 10px 20px;
  /* ${(props) => (props.active ? "#f06d24" : "transparent")};
  color: ${(props) => (props.active ? "white" : "black")}; */
  &:active {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    cursor: auto;
  }
`;

export const ContainerAddPizza = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.p`
  color: #000;
  font-size: 16px;
  font-style: bold;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.33px;
`;
export const AddButton = styled.button`
  width: 150px;
  border-radius: 30px;
  border: 1px solid #f06d24;
  background: #fff;
  color: #f06d24;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #f06d24;
    border: 1px solid #fff;
    outline: transparent;
  }
  &:focus {
    box-shadow: 0 2px 10px rgba(240, 109, 36, 0.5);
  }
  /* span {
    color: #fff;
    border: 5px solid #f06d24;
    background-color: #f06d24;
    border-radius: 50%;
  } */
`;
