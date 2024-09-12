export const Lista = ({ tarefas = ['Estudar ', 'comer', 'beber'] }) => {
    return (
      <ul>
        <h2>Minhas Tarefas</h2>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    );
  };