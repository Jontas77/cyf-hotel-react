import React from "react";
import "./App.css";

// Import Components
import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";

const App = () => {
  const hotelDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  const uniqueKeys = Math.floor(Math.random() * 1000000);

  return (
    <div className="App">
      <Heading keys={uniqueKeys} />
      <TouristInfoCards keys={uniqueKeys} />
      <Bookings keys={uniqueKeys} />
      <Restaurant keys={uniqueKeys} />
      <Footer details={hotelDetails} keys={uniqueKeys} />
    </div>
  );
};

export default App;
