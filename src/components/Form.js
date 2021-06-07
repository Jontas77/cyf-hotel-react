import React, { useState } from "react";

const Form = () => {
  const [state, setState] = useState({
    firstName: "",
    surname: "",
    title: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const {
    firstName,
    surname,
    title,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = state;

  const handleChange = e => {
    let value = e.target.value;
    let nameValue = e.target.name;
    if (
      nameValue === "firstName" ||
      nameValue === "surname" ||
      nameValue === "title" ||
      nameValue === "email" ||
      nameValue === "roomId" ||
      nameValue === "checkInDate" ||
      nameValue === "checkOutDate"
    ) {
      setState(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitting Name`);
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
            value={firstName}
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
            value={surname}
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
            value={title}
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
            value={email}
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="roomId"
            value={roomId}
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
            value={checkInDate}
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
            value={checkOutDate}
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
