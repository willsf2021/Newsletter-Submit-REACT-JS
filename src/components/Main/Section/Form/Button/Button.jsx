import { StyledButton } from "./Button.style";

export const Button = ({ content, type }) => {
  return <StyledButton type={type}>{content}</StyledButton>;
};
