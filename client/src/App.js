// este componente es toda la App
import Form from './Form';
import List from './List';

const App = () => {
  return (
    <div>
      <h1>la35tareas</h1>
      <Form />
      <List />
      <p>Esto no tiene que ser de color rojo</p>
    </div>
  );
}

export default App;
