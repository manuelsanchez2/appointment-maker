import React from "react";

const Appointment = ({ appointment, deleteAppointment }) => {
  return (
    <div className="appointment">
      <p>
        Pet name: <span>{appointment.pet}</span>
      </p>
      <p>
        Owner: <span>{appointment.owner}</span>
      </p>
      <p>
        Date: <span>{appointment.date}</span>
      </p>
      <p>
        Time: <span>{appointment.time}</span>
      </p>
      <p>
        Problem: <span>{appointment.problem}</span>
      </p>

      <button
        onClick={() => deleteAppointment(appointment.id)}
        className="button delete u-full-width"
      >
        Delete X
      </button>
    </div>
  );
};

export default Appointment;
