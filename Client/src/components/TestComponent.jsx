import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const TestComponent = ({ value }) => {
  const [records, setRecords] = useState([]);

  // Parse array to query
  const parameterizeArray = (key, arr) => {
    arr = arr.map(encodeURIComponent);
    return "?" + key + "[]=" + arr.join("&" + key + "[]=");
  };

  //Parse array to query

  //Desarollo:  http://localhost:8080/api/records
  //Produccion: https://budget-app-challenge.herokuapp.com/api/records
  //

  useEffect(() => {
    axios
      .get(
        `https://budget-app-challenge.herokuapp.com/api/records/${parameterizeArray(
          "typeq",
          value
        )}`
      )
      .then((res) => {
        res.data.records.sort(function (a, b) {
          var dateA = new Date(a.date),
            dateB = new Date(b.date);
          return dateB - dateA;
        });
        console.log(res.data.records);
        setRecords(res.data.records);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value]);

  return (
    <div>
      {records.map((record) => (
        //   <li key={record._id}>{record.concept}</li>
        <div key={record._id} className="container card mb-2">
          <h5>concept: {record.concept}</h5>
          <h5>amount: {record.amount}</h5>
          <h5>date: {moment(record.date).format("Do MMM YY")}</h5>
          <h5>type: {record.type}</h5>
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
