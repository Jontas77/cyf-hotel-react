import React, { useState } from "react";
import "./App.css";

// Import Components
import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";
import Form from "./components/Form";

const App = () => {
  const hotelDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  const [state, setState] = useState({
    id: "",
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const [data, setData] = useState([]);

  const handleChange = e => {
    let nameValue = e.target.name;
    let inputValue = e.target.value;
    setState(prevState => ({
      ...prevState,
      [nameValue]: inputValue
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setData(value => [...value, state]);
    e.target.reset();
  };

  const uniqueKeys = Math.floor(Math.random() * 1000000);

  return (
    <div className="App">
      <Heading keys={uniqueKeys} />
      <div className="page-container">
        <TouristInfoCards keys={uniqueKeys} />
        <Bookings keys={uniqueKeys} formData={data} />
        <Restaurant keys={uniqueKeys} />
        <Form
          userData={state}
          handleChange={handleChange}
          formData={data}
          handleSubmit={handleSubmit}
        />
      </div>
      <Footer details={hotelDetails} keys={uniqueKeys} />
    </div>
  );
};

export default App;
