import { useState } from "react";

export function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
          <h1>Contador: {contador}</h1>
          <button onClick={() => setContador(contador - 1)}>Decrementar</button>
          <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
}