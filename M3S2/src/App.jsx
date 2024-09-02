import ThemeSwitcher from "./components/ThemeSwitcher"
import ListaTarefas from "./forms/Exercicio02-03/listaTarefas"
import { FormProvider } from './forms/Exercicio04/FormContext';
import LoginForm from './forms/Exercicio04/LoginForm';
import FormDataDisplay from './forms/Exercicio04/FormDataDisplay';
import './App.css'
import Contador from "./forms/Exercicio05/Contador";


function App() {

  return (
    <>
    <div>
      <Contador/>
    </div>
    <div className="App">
      <ThemeSwitcher/>
    <ListaTarefas></ListaTarefas>
    </div>

    <FormProvider>
      <div>
        <h1>Login</h1>
        <LoginForm />
        <FormDataDisplay />
      </div>
    </FormProvider>




    </>
  )
}

export default App
