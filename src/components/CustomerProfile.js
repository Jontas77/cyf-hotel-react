import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <ul>
      <li>Customer ID: {id}</li>
      <li>Email: {data.email}</li>
      <li>VIP: {data.vip === true ? "Is VIP" : "Not a VIP"}</li>
      <li>Phone Number : {data.phoneNumber}</li>
    </ul>
  );
};

export default CustomerProfile;
