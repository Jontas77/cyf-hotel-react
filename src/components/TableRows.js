import moment from "moment";
import React, { useState } from "react";

const TableRows = ({ table, color }) => {
  const [colour, setColour] = useState(color);
  const [selectRow, setSelectRow] = useState(false);

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
      const newColor = colour == color ? "blue" : color;
      setColour(newColor);
    };

    return (
      <tr
        key={index}
        className={`${colour} ${index} ${selectRow}`}
        onClick={e => e.target && changeColor}
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
