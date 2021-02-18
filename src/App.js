import { useState, useEffect } from 'react';
import { Cita } from './components/Cita';
import { Formulario} from './components/Formulario';
import logo from './logo.svg';

function App() {
  // Arreglo de citas
  const [citas, setCitas] = useState(JSON.parse(localStorage.getItem('citas')) || []);

  // useEffect para guardar en el localStorage cuando el state cambia
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas])
  
  // Leer la nueva cita
  const crearCita = cita =>{
    setCitas([...citas, cita] );
  }

  // Elimino una cita por id
  const eliminarCita = (idCita)=>{
    setCitas(citas.filter(cita => cita.id !== idCita));
  }

  // Mensaje condicional
  
  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half column">
              
              {citas.length=== 0 ? <h2>No hay citas</h2> : <h2>Administra tus citas</h2>}
              {citas.map(cita => (
                <Cita cita= {cita} key={cita.id} eliminarCita={eliminarCita}/>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
