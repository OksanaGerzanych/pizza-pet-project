import { styled } from "styled-components";

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
  background: #f9f9f9;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-align: center;
  padding: 10px 30px;
  &:active {
    background: #231f20;
    color: fff;
  }
`;
