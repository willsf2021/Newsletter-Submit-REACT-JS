import { StyledButton } from "./Button.style";

export const Button = ({ content, type, onClick }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {content}
    </StyledButton>
  );
};
