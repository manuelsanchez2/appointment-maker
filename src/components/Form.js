import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ createAppointment }) => {
  // Crear State de Citas
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    problem: "",
  });

  const [error, setError] = useState(false);

  // Funcion que se actualiza cada vez que el usuario escribe en un input
  // Buenas practicas es llamarlo handleChange - pero puede ser lo que quieras

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores

  const { pet, owner, date, time, problem } = appointment;

  // Submit

  const submitData = (e) => {
    e.preventDefault();

    // Validate that all the fields are filled
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      time.trim() === "" ||
      date.trim() === "" ||
      problem.trim() === ""
    ) {
      setError(true);
      return;
    }
    // Delete the error message
    setError(false);

    // Assign an id
    appointment.id = uuidv4();

    // Create the appointment
    createAppointment(appointment);

    // Reset the form
    setAppointment({
      pet: "",
      owner: "",
      date: "",
      time: "",
      problem: "",
    });
  };

  return (
    <Fragment>
      <h2>Create an appointment</h2>
      {error ? <p className="alerta-error">All fields are mandatory</p> : null}

      <form onSubmit={submitData}>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Enter pet name"
          onChange={handleChange}
          value={pet}
        />
        <label>Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Enter owner name"
          onChange={handleChange}
          value={owner}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />
        <label>Time of call</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          placeholder="Enter owner name"
          onChange={handleChange}
          value={time}
        />
        <label>Reason</label>
        <textarea
          className="u-full-width"
          name="problem"
          onChange={handleChange}
          value={problem}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
