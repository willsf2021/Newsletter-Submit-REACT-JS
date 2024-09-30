import { StyledSection } from "./Section.style";
import { Title } from "./Title/Title";
import { Paragraph } from "./Paragraph/Paragraph";
import { List } from "./List/List";
import { Form } from "./Form/Form";

export const Section = () => {
  return (
    <StyledSection>
      <Title />
      <Paragraph content="Join 60,000+ product managers receiving monthly updates on:" />
      <List />
      <Form />
    </StyledSection>
  );
};
