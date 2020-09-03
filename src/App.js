import React, { Fragment, useState } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
  // Appointments array
  const [appointments, setAppointments] = useState([]);

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
  return (
    <Fragment>
      <h1>Appointment maker</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>See your appointments</h2>
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
