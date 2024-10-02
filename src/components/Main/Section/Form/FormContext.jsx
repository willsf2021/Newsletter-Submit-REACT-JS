import React, { createContext, useContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children, onSubmit }) => {
  return (
    <FormContext.Provider value={{ onSubmit }}>
      {children}
    </FormContext.Provider>
  );
};