import { useState } from "react";
import Axios from "axios";

const GetRecordsList = () => {
  const [recordsList, setRecordsList] = useState([]);

  const getRecords = () => {
    Axios.get("http://localhost:3001/records").then((response) => {
      setRecordsList(response.data);
    });
  };

  return (
    <>
      <div>
        <button onClick={getRecords} className="btn btn-info mb-2">
          See full records
        </button>
        {recordsList.map((val, key) => {
          return (
            <div className="card mb-2">
              <h5>concept: {val.concept}</h5>
              <h5>amount: {val.amount}</h5>
              <h5>date: {val.date}</h5>
              <h5>type: {val.type}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetRecordsList;
