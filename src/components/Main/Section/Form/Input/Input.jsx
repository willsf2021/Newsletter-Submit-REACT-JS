import {
  StyledInputLabelContainer,
  StyledInput,
  StyledLabel,
} from "./Input.style";

export const Input = ({ placeholder, id, label }) => {
  return (
    <StyledInputLabelContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput placeholder={placeholder} id={id} />
    </StyledInputLabelContainer>
  );
};
