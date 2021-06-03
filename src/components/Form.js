import React, { useState } from "react";

const Form = () => {
  const [state, setState] = useState({
    firstName: "",
    surname: "",
    title: "",
    email: "",
    roomID: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const handleChange = e => {
    let value = e.target.value;
    setState({
      firstName: value,
      surname: value,
      title: value,
      email: value,
      roomID: value,
      checkInDate: value,
      checkOutDate: value
    });
    console.log(`${value}`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="form mb-3">
      <h3>Create Booking</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="surname"
            placeholder="Surname"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="roomID"
            placeholder="Room ID"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            name="checkInDate"
            placeholder="Check in date"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            name="checkOutDate"
            placeholder="Check out date"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
