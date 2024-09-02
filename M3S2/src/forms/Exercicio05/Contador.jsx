import { useEffect, useState } from "react"

const Contador = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Contador: ${count}`
    }, [count])

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count -1)

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Contador</h1>
            <p>Valor Atual: {count}</p>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>

        </div>
        
    )
}

export default Contador