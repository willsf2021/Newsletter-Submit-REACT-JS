import styled from "styled-components";

export const StyledSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 24px;
  padding: 30px 24px;
  @media (min-width: 768px) {
      width: 440px;
      padding: 72px 40px;
  }
`;
