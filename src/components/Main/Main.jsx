import { useState } from "react"; // Importar useState
import { StyledMain } from "./Main.style";
import { Aside } from "../AsideIllustration/AsideIllustration";
import { Section } from "./Section/Section";
import { ModalSucces } from "./Section/Form/ModalSucces/ModalSucces";
import { FormProvider } from "./Section/Form/FormContext";

export const Main = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const onSubmit = (email) => {
    setSubmittedEmail(email);
    setIsVisible(false);
  };
  const handleDismiss = () => {
    setIsVisible(true);
    console.log("olá");
  };

  return (
    <FormProvider onSubmit={onSubmit}>
      {isVisible ? (
        <StyledMain isVisible={isVisible}>
          <Aside /> <Section />
        </StyledMain>
      ) : (
        <StyledMain isVisible={isVisible}>
          <ModalSucces email={submittedEmail} onDismiss={handleDismiss} />
        </StyledMain>
      )}
    </FormProvider>
  );
};
