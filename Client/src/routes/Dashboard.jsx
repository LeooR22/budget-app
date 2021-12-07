import { useState } from "react";
import Axios from "axios";

const Dashboard = () => {
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [type, setType] = useState("income");

  const [newAmount, setNewAmount] = useState(0);

  const [recordList, setRecordlist] = useState([]);

  const addRecord = () => {
    Axios.post("http://localhost:3002/create", {
      concept: concept,
      amount: amount,
      date: date,
      type: type,
    }).then(() => {
      setRecordlist([
        ...setRecordlist,
        {
          concept: concept,
          amount: amount,
          date: date,
          type: type,
        },
      ]);
    });
  };

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
          console.log(val.recordId);
          console.log(id);
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
    <div className="container">
      <h1>Add new record</h1>
      <form className="card">
        <input
          placeholder="Concept"
          type="text"
          className="form-control mb-2"
          onChange={(event) => {
            setConcept(event.target.value);
          }}
        />
        <input
          placeholder="Amount"
          type="number"
          className="form-control mb-2"
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
        <input
          placeholder="Date"
          type="date"
          className="form-control mb-2"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <select
          name="type"
          className="form-control"
          onChange={(event) => {
            setType(event.target.value);
          }}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button onClick={addRecord} className="btn btn-success mb-3 mt-2">
          Add Record
        </button>
      </form>
      <div>
        <button onClick={getRecords} className="btn btn-info mb-4">
          Show Records
        </button>

        {recordList.map((val, key) => {
          return (
            <div className="container card mb-2">
              <div className="">
                <h5>concept: {val.concept}</h5>
                <h5>amount: {val.amount}</h5>
                <h5>date: {val.date}</h5>
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
