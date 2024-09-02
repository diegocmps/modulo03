// FormDataDisplay.js
import { useFormContext } from './FormContext'; 

const FormDataDisplay = () => {
  const { formData } = useFormContext(); 

  return (
    <div>
      <h3>Dados do Formulário:</h3>
      <p>Email: {formData.email}</p>
      <p>Senha: {formData.password}</p>
    </div>
  );
};

export default FormDataDisplay;
