import React from "react";

const Footer = ({ details }) => {
  return (
    <div className="footer">
      <ul>
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
