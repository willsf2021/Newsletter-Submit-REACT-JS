import { StyledForm } from "./Form.style";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";
import { Error } from "./Error.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormContext } from "./FormContext";

export const Form = () => {
  const { onSubmit } = useFormContext();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Valid email required")
      .required("Valid email required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    onSubmit(data.email);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        id="email"
        placeholder="email@company.com"
        label="Email address"
        name="email"
        register={register}
        hasError={errors.email ? true : false}
      />
      <Error>{errors.email?.message}</Error>
      <Button type="submit" content="Subscribe to monthly newsletter" />
    </StyledForm>
  );
};
