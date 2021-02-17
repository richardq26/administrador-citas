import React, { useState } from "react";

export const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // Función que se ejecuta cada que el usuario escribe en un input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  return (
    <>
      <h2>Crear cita</h2>
      <form>
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
