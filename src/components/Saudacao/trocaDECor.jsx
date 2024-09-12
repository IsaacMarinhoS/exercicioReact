import { useState } from "react";

export function BotaoTrocaCor() {
    
    const [cor, setCor] = useState("blue"); 

    const trocarCor = () => {
        if(cor ==="blue"){
            setCor("green")

            return;
        }
        setCor("blue")
    };

    return (
        <div style={{ backgroundColor: cor, padding: "15px" }}>
            <button onClick={trocarCor}>
                Trocar Cor
            </button>
        </div>
    );
}