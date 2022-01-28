import { useState } from "react";
import Axios from "axios";
import FormRecord from "../components/FormRecord";
import moment from "moment";

const Dashboard = () => {
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [type, setType] = useState("income");

  const [newAmount, setNewAmount] = useState(0);

  const [recordList, setRecordlist] = useState([]);

  const getRecords = () => {
    Axios.get("http://localhost:3002/records").then((response) => {
      setRecordlist(response.data);
    });
  };

  const updateRecordAmount = (id) => {
    Axios.put("http://localhost:3002/update", {
      amount: newAmount,
      id: id,
    }).then((response) => {
      setRecordlist(
        recordList.map((val) => {
          // console.log(val.recordId);
          // console.log(id);
          return val.recordId === id
            ? {
                recordId: val.recordId,
                concept: val.concept,
                amount: newAmount,
                date: val.date,
                type: val.type,
              }
            : val;
        })
      );
    });
  };

  const deleteRecord = (id) => {
    Axios.delete(`http://localhost:3002/delete/${id}`).then((response) => {
      setRecordlist(
        recordList.filter((val) => {
          return val.recordId !== id;
        })
      );
    });
  };

  return (
    <div className="container ">
      <h1 className="d-flex justify-content-center">Add new record</h1>

      <FormRecord />

      <div>
        <button onClick={getRecords} className="btn btn-info mb-4">
          Show Records
        </button>

        {recordList.map((val, key) => {
          return (
            <div key={val.recordId} className="container card mb-2">
              <div className="">
                <h5>concept: {val.concept}</h5>
                <h5>amount: {val.amount}</h5>
                <h5>date: {moment(val.date).format("Do MMM YY")}</h5>
                <h5>type: {val.type}</h5>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Amount update"
                  onChange={(event) => {
                    setNewAmount(event.target.value);
                  }}
                />
                <button
                  className="btn btn-warning mx-2 mb-2"
                  onClick={() => {
                    updateRecordAmount(val.recordId);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  className="btn btn-danger mb-2"
                  onClick={() => {
                    deleteRecord(val.recordId);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Dashboard;
