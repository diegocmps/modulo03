import { useState } from "react"
import { useForm } from "react-hook-form"
import "./formulario.css"

function Formulario() {

    const { handleSubmit, register, formState: { errors }, reset } = useForm()
    const [showMessage, setShowMessage] = useState("")

    const onSubmit = (data) => {
        setShowMessage('Cadastro realizado com sucesso!')
        console.log(data)
        reset()
    }

    return (

        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Nome é obrigatório" })}
                />
                {errors.name && <p>{errors.name.message}</p>}

                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    type="email"
                    {...register("email", { required: "Email é obrigatório" })}
                />
                {errors.email && <p>{errors.email.message}</p>}

                <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    type="password"
                    {...register("password", { required: "A senha é obrigatória" })}
                />
                {errors.password && <p>{errors.password.message}</p>}
                <button type="submit">Enviar</button>

            </form>

            {showMessage && <p>{showMessage}</p>}
        </div>
    )
}

export default Formulario