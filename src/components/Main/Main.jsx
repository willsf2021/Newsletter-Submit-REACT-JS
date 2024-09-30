import { StyledMain } from "./Main.style";
import { Aside } from "../AsideIllustration/AsideIllustration";
import { Section } from "./Section/Section";

export const Main = () => {
  return (
    <StyledMain>
      <Aside />
      <Section />
    </StyledMain>
  );
};
