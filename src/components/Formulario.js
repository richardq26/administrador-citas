import React from 'react'

export const Formulario = () => {
    return (
        <>
            <h2>Desde formulario</h2>

            <form>
                <label htmlFor="nombremascota">Nombre de la mascota</label>
                <input type="text" id="nombremascota" name="mascota" className="u-full-width" placeholder="Nombre de tu mascota"/>

                <label htmlFor="nombredueño">Nombre del dueño</label>
                <input type="text" id="nombredueño" name="propietario" className="u-full-width" placeholder="Nombre del dueño"/>

                <label htmlFor="fecha">Nombre del dueño</label>
                <input type="date" id="fecha" name="fecha" className="u-full-width"/>

                <label htmlFor="time">Hora</label>
                <input type="time" id="time" name="time" className="u-full-width"/>

                <label htmlFor="sintomas">Síntomas</label>
                <textarea name="sintomas" id="sintomas" cols="30" rows="10" className="u-full-width"></textarea>

                <button type="submit" className="u-full-width button-primary">Reservar cita</button>
            </form>
        </>
    )
}
