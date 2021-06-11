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
  sortType,
  sort
}) => {
  return (
    <>
      {table.sort(sortType[sort].fn).map(user => {
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
          </>
        );
      })}
      {formData.sort(sortType[sort].fn).map(table => {
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

        const start = moment(checkInDate);
        const end = moment(checkOutDate);

        return (
          <>
            <tr
              key={firstName}
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
          </>
        );
      })}
    </>
  );
};

export default TableRows;
