import styled from "styled-components";
import IconList from "../../../../assets/images/icon-list.svg";

export const StyledList = styled.ul`
  list-style-image: url(${IconList});
  list-style-position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  width: fit-content;
  @media (min-width: 768px) {
    padding-left: 24px;
    row-gap: 12px;
}
`;

export const StyledItemList = styled.li`
  width: 90%;
  padding-left: 8px;
  padding-left: 8px;
  @media (min-width: 768px) {
    width: 100%;
  }
  p {
    position: relative;
    top: -5px;
  }
`;
