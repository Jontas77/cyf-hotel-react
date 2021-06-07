import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = ({ keys, formData }) => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        setLoading(true);
      })
      .catch(err => {
        err = setError("Whooops Something Went Wrong!!");
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
        <Search search={search} keys={keys} />

        {error ? (
          <span className="text-center">
            <h3>{error}</h3>
          </span>
        ) : loading ? (
          <SearchResults details={bookings} keys={keys} formData={formData} />
        ) : (
          <span className="text-center">
            <h3>Loading.....</h3>
          </span>
        )}
      </div>
    </div>
  );
};

export default Bookings;
