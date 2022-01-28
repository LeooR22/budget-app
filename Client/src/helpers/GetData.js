import Axios from "axios";
import React, { useState } from "react";

export const GetData = async () => {
  const [recordsList, setRecordsList] = useState([]);

  Axios.get("http://localhost:3002/records/lastTen").then(
    (response) => {
      setRecordsList(response.data);
    },
    [recordsList]
  );
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
            </div>
          );
        })}
      </div>
    </>
  );
};
