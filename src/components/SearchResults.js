import React, { useState } from "react";
import TableRows from "./TableRows";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ details, formData }) => {
  const [value, setValue] = useState(false);
  const [selected, setSelected] = useState("");
  const [sort, setSort] = useState("default");

  const customerID = details.map(customer => customer.id);

  const sortType = {
    up: {
      class: "A -> Z",
      fn: (a, b) => (a.firstName < b.firstName ? -1 : 1)
    },
    down: {
      class: "Z -> A",
      fn: (a, b) => (b.firstName < a.firstName ? -1 : 1)
    },
    default: {
      class: "Sort",
      fn: (a, b) => a.firstName
    }
  };

  const onSortChange = () => {
    let nextSort;
    if (sort === "down") {
      nextSort = "up";
    } else if (sort === "up") {
      nextSort = "default";
    } else if (sort === "default") {
      nextSort = "down";
    }
    return setSort(nextSort);
  };

  return (
    <div className="table-responsive">
      <button className="btn btn-primary mb-2" onClick={onSortChange}>
        {`${sortType[sort].class}`}
      </button>
      {customerID.map(
        id => selected === id && value && <CustomerProfile id={id} key={id} />
      )}
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
        <tbody key={details.id}>
          <TableRows
            table={details}
            isOn={value}
            handleToggle={() => setValue(!value)}
            onColor="orange"
            isSelected={selected}
            selectRow={id => setSelected(id)}
            formData={formData}
            sortType={sortType}
            sort={sort}
          />
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
