import Contador from './components/contador'
import Jsx from './components/jsx'
import TemperaturaJsx from './components/temperatura'
import Lista from './components/lista'
import Formulario from './components/formulario'

function App() {
  return (
    <div className="App">
      <h1>Hola mundo React</h1>
      <Contador />
      <Jsx />
      <TemperaturaJsx />
      <Lista />
      <div className="container mt-5">
        <Formulario />
      </div>
      
    </div>
  );
}

export default App;
