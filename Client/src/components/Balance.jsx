import { useState } from "react";
import Axios from "axios";

const Balance = () => {
  const [balance, setbalance] = useState([]);

  const getBalance = () => {
    Axios.get("http://localhost:3002/records/balance").then((response) => {
      setbalance(response.data);
    });
  };

  return (
    <>
      <div>
        <button onClick={getBalance} className="btn btn-info mb-2">
          See balance
        </button>
        {balance.map((val, key) => {
          return (
            <div className="card mb-2">
              <h5>Balance: {val.balance}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Balance;
