import { StyledForm } from "./Form.style";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";

export const Form = () => {
  return (
    <StyledForm>
      <Input id="email" placeholder="email@company.com" label="Email address" />
      <Button type="submit" content="Subscribe to monthly newsletter" />
    </StyledForm>
  );
};
