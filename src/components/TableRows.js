import moment from "moment";
import React, { useState } from "react";

const TableRows = ({ table }) => {
  const [colour, setColour] = useState("white");

  const [selectRow, setSelectRow] = useState(-1);

  return table.map((user, index) => {
    const {
      id,
      title,
      firstName,
      surname,
      email,
      roomId,
      checkInDate,
      checkOutDate
    } = user;

    const start = moment(checkInDate);
    const end = moment(checkOutDate);

    const changeColor = () => {
      setColour("blue");
    };

    return (
      <tr
        key={index}
        className={selectRow === index ? "tableSelected" : ""}
        onClick={changeColor}
      >
        <td>{id}</td>
        <td>{title}</td>
        <td>{firstName}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>{roomId}</td>
        <td>{checkInDate}</td>
        <td>{checkOutDate}</td>
        <td>{moment.duration(end.diff(start)).asDays()}</td>
      </tr>
    );
  });
};

export default TableRows;
