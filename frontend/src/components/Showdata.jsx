import React from "react";
import axios from "axios";

function Showdata() {
  const [data, setData] = React.useState([]);
  const [phoneNo, setPhoneNo] = React.useState();
  React.useEffect(() => {
    axios.get(`http://localhost:5000/alldata`).then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <div className="form-group form">
        <label htmlFor="phoneno">Phone Number</label>
        <input
          name="phoneno"
          type="text"
          className={"form-control"}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <br />
        <button
          className="btn btn-primary mr-2"
          onClick={() => {
            axios
              .get(`http://localhost:5000/data/${phoneNo}`)
              .then((res) => setData(res.data));
          }}
        >
          Search
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Company Name</th>
            <th scope="col">Month</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
            return (
              <tr>
                <td>{val.fname}</td>
                <td>{val.lname}</td>
                <td>{val.email}</td>
                <td>{val.phoneno}</td>
                <td>{val.companyname}</td>
                <td>{val.CompanyDetails.month}</td>
                <td>{val.CompanyDetails.amt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Showdata;
