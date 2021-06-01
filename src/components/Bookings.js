import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = ({ keys }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(response => {
        if (response.status >= 200 || response.status <= 299) {
          return response.json();
        } else {
          console.log("API has an error");
        }
      })
      .then(data => {
        setBookings(data);
        setLoading(true);
      })
      .catch(error => console.error(error));
    setLoading(true);
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
        {loading ? (
          <SearchResults details={bookings} keys={keys} />
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
