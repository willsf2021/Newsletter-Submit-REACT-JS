import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  width: fit-content;
  @media (min-width: 768px) {
    /* padding-left: 24px; */
    row-gap: 12px;
  }
`;

export const StyledItemList = styled.li`
  display: flex;
  align-items: center;
  margin-left: -32px;
  column-gap: 16px;
  width: 90%;
  @media (min-width: 768px) {
    padding-left: 16px;
    width: 100%;
    margin-left: -32px;
  }
  p {
    width: 400px;
  }
`;
