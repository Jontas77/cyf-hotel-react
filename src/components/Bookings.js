import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(response => response.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    let filtered = bookings.filter(item => {
      return (
        item.firstName.toLowerCase().includes(searchVal) ||
        item.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(filtered);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults details={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
