import { useEffect, useState } from "react";
import './ListaTarefas.css';

function ListaDeTarefas() {

    const [tarefas, setTarefas] = useState(() => {
        const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
        return tarefasSalvas || [];
    });
    const [novaTarefa, setNovaTarefa] = useState("");

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

    const submit = (e) => {
        e.preventDefault();
        if (novaTarefa.trim() !== "") {
            setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa }]);
            setNovaTarefa("");
        }
    };

    const removerTarefa = (id) => {
        const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
        setTarefas(novasTarefas);
    };

    return (
        <div className="form-container">
            <form onSubmit={submit}>
                <h2>Lista de Tarefas</h2>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="text"
                        placeholder="Insira uma tarefa"
                        value={novaTarefa}
                        onChange={e => setNovaTarefa(e.target.value)}
                    />
                    <button type="submit">Adicionar</button>
                </div>
                <ul>
                    {tarefas.map(tarefa => (
                        <li key={tarefa.id}>
                            {tarefa.texto}
                            <button className="delete-button" onClick={() => removerTarefa(tarefa.id)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );
}

export default ListaDeTarefas;
