import React, { Fragment, useState } from "react";
import Form from "./components/Form";

function App() {
  // Appointments array
  const [appointments, setAppointments] = useState([]);

  // Read the new appointment + add the new one
  const createAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };
  return (
    <Fragment>
      <h1>Appointment maker</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
