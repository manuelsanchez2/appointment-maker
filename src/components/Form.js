import React, { Fragment } from "react";

function Form(props) {
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
        />
        <label>Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Enter owner name"
        />
        <label>Date</label>
        <input type="date" name="date" className="u-full-width" />
        <label>Time of call</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          placeholder="Enter owner name"
        />
        <label>Reason</label>
        <textarea className="u-full-width" name="problems"></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add appointment
        </button>
      </form>
    </Fragment>
  );
}

export default Form;
