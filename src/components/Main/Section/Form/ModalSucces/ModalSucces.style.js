import styled from "styled-components";
import { theme } from "../../../../../theme";

export const StyledModalSuccess = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 140px 20px 40px;

  @media (min-width: 768px) {
    h1 {
        line-height: 3.6rem;
    }
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 24px 40px 24px;
    width: fit-content;
    row-gap: 40px;
  }
`;

export const StyledImg = styled.img`
  width: 64px;
  margin-bottom: 16px;
`;

export const StyledMessageContainer = styled.section`
  padding-right: 0px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 16px;
  p {
    color: ${theme.neutral.darkSlateGrey};
    line-height: 1.6rem;
  }
`;
