import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 375px;
  background-color: white;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    border-radius: 36px;
    padding: 24px;
    ${(props) =>
      props.isVisible === true
        ? `
    max-width: fit-content;
    column-gap: 24px;`
        : `
    max-width: 500px;
    column-gap: 24px;`}
  }
`;
