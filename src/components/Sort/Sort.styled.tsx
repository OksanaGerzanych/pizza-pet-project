import { styled } from "styled-components";

export const Select = styled.select`
  border: 1px solid #cccccc;
  /* color: #f26b25; */
  border-radius: 2px;
  padding: 10px;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.21px;
  &:hover, &:focus{
   outline-style: none;
  }
`;
export const ContainerSort = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const TextSort = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.21px;
`;
