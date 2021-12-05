import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const GetRecordsList = () => {
  const [recordsList, setRecordsList] = useState([]);

  const getRecords = () => {
    Axios.get("http://localhost:3002/records").then((response) => {
      setRecordsList(response.data);
    });
  };
  getRecords();
  return (
    <>
      <div>
        {recordsList.map((val, key) => {
          return (
            <div className="container card mb-2">
              <h5>concept: {val.concept}</h5>
              <h5>amount: {val.amount}</h5>
              <h5>date: {val.date}</h5>
              <h5>type: {val.type}</h5>
              <div className="mb-2">
                <Link to="/dashboard/edit" className="btn btn-info mx-2">
                  Edit
                </Link>
                <Link to="/dashboard/delete" className="btn btn-danger">
                  Delete
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetRecordsList;
