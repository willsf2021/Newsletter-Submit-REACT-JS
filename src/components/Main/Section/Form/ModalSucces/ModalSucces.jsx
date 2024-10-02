import {
  StyledModalSuccess,
  StyledImg,
  StyledMessageContainer,
} from "./ModalSucces.style";
import { Title } from "../../Title/Title";
import { Paragraph } from "../../Paragraph/Paragraph";
import { Button } from "../Button/Button";
import IconSuccess from "../../../../../assets/images/icon-success.svg";

export const ModalSucces = ({ email, onDismiss }) => {
  return (
    <StyledModalSuccess>
      <StyledMessageContainer>
        <StyledImg src={IconSuccess} />
        <Title title="Thanks for subscribing!" />
        <Paragraph
          content={
            <>
              A confirmation email has been send to <strong>{email}</strong>.
              Please open it and click the button inside to confirm your
              subscription
            </>
          }
        />
      </StyledMessageContainer>
      <Button content="Dismiss message" onClick={onDismiss} />
    </StyledModalSuccess>
  );
};
