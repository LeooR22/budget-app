import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
//routes
import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import AddRecord from "./routes/AddRecord";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add" element={<AddRecord />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
