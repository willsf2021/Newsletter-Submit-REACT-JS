import styled from "styled-components";
import { theme } from "../../../../../theme";

export const StyledInputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const StyledInput = styled.input`
  border-radius: 8px;
  outline: none;
  padding: 18px 24px;
  border: 1px solid ${theme.neutral.greyOpacity};
  color: ${theme.neutral.darkSlateGrey};
  font: 400 16px Roboto, sans-serif;
  cursor: pointer;
  &::placeholder {
    font: 400 16px Roboto, sans-serif;
  }

  &:active,
  &:focus {
    border: 1px solid ${theme.neutral.charcoalGrey};
  }
`;

export const StyledLabel = styled.label`
  color: ${theme.neutral.darkSlateGrey};
  font-size: 12px;
  font-weight: 700;
`;
