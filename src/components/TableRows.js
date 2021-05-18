import moment from "moment";
import React from "react";

const TableRows = props => {
  return props.table.map((user, index) => {
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

    return (
      <tr key={index}>
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
