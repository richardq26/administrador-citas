import { useState } from 'react';
import { Formulario} from './components/Formulario';
import logo from './logo.svg';

function App() {
  // Arreglo de citas
  const [citas, setCitas] = useState([]);
  // Leer la nueva cita
  const crearCita = cita =>{
    setCitas([...citas, cita] );
  }
  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half column">
              2
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
