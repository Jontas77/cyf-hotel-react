import React, { useState } from "react";
import TableRows from "./TableRows";

const SearchResults = ({ details }) => {
  const [value, setValue] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Firstname</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number of Nights</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            table={details}
            isOn={value}
            handleToggle={() => setValue(!value)}
            onColor="orange"
            isSelected={selected}
            selectRow={id => setSelected(id)}
          />
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
