import moment from "moment";
import React from "react";

const TableRows = ({
  table,
  isOn,
  handleToggle,
  onColor,
  isSelected,
  selectRow,
  formData,
  keys
}) => {
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

    return (
      <>
        <tr
          key={id}
          className="table-row"
          style={{ backgroundColor: isSelected === id && isOn && onColor }}
          onClick={() => {
            handleToggle();
            selectRow(id);
          }}
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
          <td>
            <button className="btn btn-primary" onClick={handleToggle}>
              Show Profile
            </button>
          </td>
        </tr>
        {formData.map(table => {
          const {
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate
          } = table;
          return (
            <tr key={keys}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{firstName}</td>
              <td>{surname}</td>
              <td>{email}</td>
              <td>{roomId}</td>
              <td>{checkInDate}</td>
              <td>{checkOutDate}</td>
              <td>{moment.duration(end.diff(start)).asDays()}</td>
              <td>
                <button className="btn btn-primary" onClick={handleToggle}>
                  Show Profile
                </button>
              </td>
            </tr>
          );
        })}
      </>
    );
  });
};

// {formData.map((item, i) => (
//   <table className="table table-bordered mb-0">
//     <tbody>
//   <tr key={i}>
//     <td>{id}</td>
//     <td>{title}</td>
//     <td>{firstName}</td>
//     <td>{surname}</td>
//     <td>{email}</td>
//     <td>{roomId}</td>
//     <td>{checkInDate}</td>
//     <td>{checkOutDate}</td>
//   </tr>
//   </tbody>
//   </table>
// ))}

export default TableRows;
