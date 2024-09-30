import styled from "styled-components";
import { theme } from "../../../../../theme";

export const StyledButton = styled.button`
  position: relative;
  font: 700 16px Roboto, sans-serif;
  color: ${theme.neutral.white};
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 18px;
  background-color: ${theme.neutral.darkSlateGrey};
  cursor: pointer;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }

  &:active {
    background: linear-gradient(
      to right,
      ${theme.primary.gradient1},
      ${theme.primary.gradient2}
    );
    box-shadow: 0px 4px 12px ${theme.primary.gradient2Shadow};
  }
`;
