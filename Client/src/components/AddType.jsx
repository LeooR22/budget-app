import React, { useState } from "react";
import TestComponent from "./TestComponent";

const AddType = () => {
  let [inputValue, setInputValue] = useState(["income", "expense"]);

  const handleAll = () => {
    setInputValue(["income", "expense"]);
    // setTypes(inputValue);
  };

  const handleExpenses = () => {
    setInputValue(["expense"]);
    // setTypes(inputValue);
  };

  const handleIncomes = () => {
    setInputValue(["income"]);
    // setTypes(inputValue);
  };

  console.log(inputValue);

  return (
    <>
      <div className="d-flex justify-content-center mb-4">
        <button
          className="btn btn-warning"
          value={inputValue}
          onClick={handleAll}
        >
          All
        </button>
        <button
          className="btn btn-warning"
          value={inputValue}
          onClick={handleExpenses}
        >
          Expenses
        </button>
        <button
          className="btn btn-warning"
          value={inputValue}
          onClick={handleIncomes}
        >
          Incomes
        </button>
      </div>
      <hr />
      <TestComponent value={inputValue} />
    </>
  );
};

export default AddType;
