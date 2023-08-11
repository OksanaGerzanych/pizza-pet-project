import { styled } from "styled-components";

export const SectionFilter = styled.section`
  padding: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CategoriesList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CategoriesItem = styled.li`
  border: 1px solid #cccccc;
  box-shadow: 2px 2px 5px rgba(136, 136, 136, 1);
  border-radius: 30px;
  background-color: ${props => (props.active ? "#f06d24" : "transparent")};
  color: ${props => (props.active ? "#fff" : "#231f20")};
  
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-align: center;
  padding: 10px 30px;
  &:hover{
    border: transparent;
  }
  
`;
