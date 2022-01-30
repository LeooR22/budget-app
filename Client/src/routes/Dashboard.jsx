import React from "react";
import AddType from "../components/AddType";
import FormRecord from "../components/FormRecord";
// import SearchType from "../components/SearchType";

const Dashboard = () => {
  return (
    <div>
      <h1>dashboard</h1>
      <h2 className="d-flex justify-content-center mb-4">Register</h2>
      <FormRecord />
      <AddType />
    </div>
  );
};

export default Dashboard;
