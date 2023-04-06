import React, { Fragment, useState } from "react";
import { v4 as uuid } from 'uuid';
export default function Formulario() {
  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuandoel usuario presiona agregar cita
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
      return;
    }
    
    // Eliminar el mensaje cuando los campos esten completos
    actualizarError(false);

    // Asignar un ID
    cita.id = uuid();

    // Crear la cita

    // Reiniciar el form
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? <p className="alerta-error">Todos los campos son obligatorios!</p> : null}
      <form onSubmit={submitCita}>
        <label htmlFor="">Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label htmlFor="">Nombre del Dueno</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del Dueno"
          onChange={actualizarState}
          value={propietario}
        />
        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label htmlFor="">Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </Fragment>
  );
}
