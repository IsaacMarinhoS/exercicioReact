export function PerfilUsuario({nome,idade,foto, style}) {

  return (
    <div>
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <img src={foto} style={style} />
      
    </div>


  );
}