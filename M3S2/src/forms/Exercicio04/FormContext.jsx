import { createContext, useState, useContext } from 'react';

const FormContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => useContext(FormContext);

// eslint-disable-next-line react/prop-types
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
