import React from "react";

const SearchResults = props => {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.details.map((item, index) => (
              <tr>
                <th>{item.id}</th>
              </tr>
            ))}
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>Mr</td>
            <td>Joseph</td>
            <td>McGee</td>
            <td>jmgee@example.com</td>
            <td>249</td>
            <td>2018-11-03</td>
            <td>2018-11-10</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>Mr</td>
            <td>Sam</td>
            <td>Burger</td>
            <td>sam@example.com</td>
            <td>65</td>
            <td>2018-12-16</td>
            <td>2018-12-23</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
