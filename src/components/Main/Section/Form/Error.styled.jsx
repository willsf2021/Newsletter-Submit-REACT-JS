import styled from "styled-components";
import { theme } from "../../../../theme";

export const Error = styled.p`
  display: inline;
  color: ${theme.primary.gradient2};
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  right: 0px;
  top:0px;
  width: max-content;
  @media (min-width: 768px) {
      top:16px;
  }
`;
