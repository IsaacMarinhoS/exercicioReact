
import { Contador } from "./components/Saudacao/contador"
import { Lista } from "./components/Saudacao/Lista"
import { PerfilUsuario } from "./components/Saudacao/perfil"
import { Saudacao } from "./components/saudacao/saudacao"
import { BotaoTrocaCor } from "./components/Saudacao/trocaDECor"


function App() {
  return (
    
    <>
     <Saudacao name="Roberto" />
     <Contador/>
     <Lista />
     <BotaoTrocaCor/>
     <PerfilUsuario nome="yuri" idade="19" style={{width: "50%"}} foto="https://laopinion.com/wp-content/uploads/sites/3/2016/02/shutterstock_99542606.jpg?quality=80&strip=all&w=600"/>

    </>
  )
}

export default App
