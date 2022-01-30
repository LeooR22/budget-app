import Axios from "axios";

export const addRecord = (concept, amount, date, type) => {
  console.log(concept);
  Axios.post("http://localhost:8080/api/records/", {
    concept,
    amount,
    date,
    type,
  }).then(() => {
    console.log("success");
  });
};
