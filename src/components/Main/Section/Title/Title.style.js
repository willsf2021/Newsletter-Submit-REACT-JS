import styled from "styled-components";
import { theme } from "../../../../theme";

export const StyledTitle = styled.h1`
  color: ${theme.neutral.darkSlateGrey};
  font-size: 40px;
  @media (min-width: 768px) {
    font-size: 56px;
  }
`;
