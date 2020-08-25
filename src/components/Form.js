import React, { Fragment, useState } from "react";

const Form = () => {
  // Crear State de Citas
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    problem: "",
  });

  // Funcion que se actualiza cada vez que el usuario escribe en un input
  // Buenas practicas es llamarlo handleChange - pero puede ser lo que quieras

  const handleChange = () => {
    console.log("hola");
  };

  return (
    <Fragment>
      <h2>Soy formulario, encantado</h2>

      <form>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Enter pet name"
          onChange={handleChange}
        />
        <label>Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Enter owner name"
          onChange={handleChange}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
        />
        <label>Time of call</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          placeholder="Enter owner name"
          onChange={handleChange}
        />
        <label>Reason</label>
        <textarea
          className="u-full-width"
          name="problems"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
