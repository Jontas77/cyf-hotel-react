import moment from "moment";
import React, { useState } from "react";

const TableRows = ({ table }) => {
  const [selected, setSelected] = useState("");
  const [addClass, setAddClass] = useState(false);

  return table.map(user => {
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

    const toggle = () => {
      setAddClass(true);
    };

    const selectRow = id => {
      setSelected(id);
    };

    let colour = ["toggle"];

    return (
      <tr
        key={id}
        className={colour}
        style={{ backgroundColor: selected === id ? "orange" : "" }}
        onClick={() => selectRow(id)}
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
