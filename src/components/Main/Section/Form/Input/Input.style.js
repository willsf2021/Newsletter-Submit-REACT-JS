
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
  border: 1px solid
    ${(props) =>
      props.hasError ? theme.primary.gradient2 : theme.neutral.greyOpacity};
  background-color: ${(props) =>
    props.hasError ? theme.primary.gradient2SOpacity : "none"};
  color: ${(props) =>
    props.hasError ? theme.primary.gradient2 : theme.neutral.darkSlateGrey};
  font: 400 16px Roboto, sans-serif;
  cursor: pointer;
  &::placeholder {
    font: 400 16px Roboto, sans-serif;
    color: ${(props) => (props.hasError ? theme.primary.gradient2 : "none")};
  }

  &:active,
  &:focus {
    border: 1px solid
      ${(props) =>
        props.hasError ? theme.primary.gradient2 : theme.neutral.charcoalGrey};
  }
`;

export const StyledLabel = styled.label`
  color: ${theme.neutral.darkSlateGrey};
  font-size: 12px;
  font-weight: 700;
`;
