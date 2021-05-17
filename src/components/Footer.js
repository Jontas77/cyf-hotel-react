import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
