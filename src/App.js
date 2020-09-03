import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
  // Appointments in local storage
  let initialAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  // Appointments array
  const [appointments, setAppointments] = useState(initialAppointments);

  // Use useEffect to carry out some operations while states change
  useEffect(() => {
    let initialAppointments = JSON.parse(localStorage.getItem("appointments"));
    if (initialAppointments) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [appointments]);

  // Read the new appointment + add the new one
  const createAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  // Delete appointment by id

  const deleteAppointment = (id) => {
    const newAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(newAppointments);
  };

  // Conditional message
  const title =
    appointments.length === 0
      ? "There are no appointments yet"
      : "See your appointments";

  return (
    <Fragment>
      <h1>Appointment maker</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((appointment) => (
              <Appointment
                deleteAppointment={deleteAppointment}
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
