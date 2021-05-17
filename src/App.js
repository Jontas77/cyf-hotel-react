import React from "react";
import "./App.css";
import FakeBookings from "./data/fakeBookings.json";

// Import Components
import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";

const App = () => {
  const hotelDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings results={FakeBookings} />
      <Footer details={hotelDetails} />
    </div>
  );
};

export default App;
