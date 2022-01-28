import { useState } from "react";
import Axios from "axios";

const GetRecordsList = () => {
  const [recordsList, setRecordsList] = useState([]);

  const [newAmount, setNewAmount] = useState(0);

  const getRecords = () => {
    Axios.get("http://localhost:3002/records").then((response) => {
      setRecordsList(response.data);
    });
  };

  // const updateRecordAmount = (recordId) => {
  //   Axios.put("http://localhost:3002/update"),
  //     { amount: newAmount, recordId: recordId };
  // };

  getRecords();
  return (
    <>
      <div>
        {recordsList.map((val) => {
          return (
            <>
              <div className="container card mb-2">
                <div>
                  <h5>concept: {val.concept}</h5>
                  <h5>amount: {val.amount}</h5>
                  <h5>date: {val.date}</h5>
                  <h5>type: {val.type}</h5>
                  <div className="mb-2"></div>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="update amount"
                    className="mx-2"
                    onChange={(event) => {
                      setNewAmount(event.target.value);
                    }}
                  />
                  {/* <button
                    onClick={() => {
                      updateRecordAmount(val.recordId);
                    }}
                    className="btn btn-info"
                  >
                    Update
                  </button> */}
                  <button className="btn btn-danger">
                    Delete: {val.recordId}
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default GetRecordsList;
