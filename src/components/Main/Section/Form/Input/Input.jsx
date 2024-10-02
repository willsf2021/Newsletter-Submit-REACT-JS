import {
  StyledInputLabelContainer,
  StyledInput,
  StyledLabel,
} from "./Input.style";

export const Input = ({ placeholder, id, label, name, register, hasError}) => {
  return (
    <StyledInputLabelContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        id={id}
        name={name}
        {...register(name)}
        hasError={hasError} 
      />
    </StyledInputLabelContainer>
  );
};
