import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  var err = false;

  const [error, actualizarError] = useState(false);
  // Función que se ejecuta cada que el usuario escribe en un input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuando el usuario presiona registrar cita
  const submitCita = (e) => {
    e.preventDefault();
    // Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);

      console.log(err);
      return;
    }

    // Si llegamos hasta aqui eliminamos el error
    actualizarError(false);

    // Asignar un ID
    cita.id = uuid();

    // Crear la cita
    crearCita(cita);

    // Reiniciar el form
    // Se reinicia porque este es el value en el form
    
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };
  return (
    <>
      <h2>Crear cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label htmlFor="nombremascota">Nombre de la mascota</label>
        <input
          type="text"
          id="nombremascota"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de tu mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label htmlFor="nombredueño">Nombre del dueño</label>
        <input
          type="text"
          id="nombredueño"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={actualizarState}
          value={propietario}
        />

        <label htmlFor="fecha">Nombre del dueño</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label htmlFor="time">Hora</label>
        <input
          type="time"
          id="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label htmlFor="sintomas">Síntomas</label>
        <textarea
          name="sintomas"
          id="sintomas"
          cols="30"
          rows="10"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Reservar cita
        </button>
      </form>
    </>
  );
};
