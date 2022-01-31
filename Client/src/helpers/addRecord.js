import Axios from "axios";

export const addRecord = (concept, amount, date, type) => {
  console.log(concept);
  Axios.post("https://budget-app-challenge.herokuapp.com/api/records", {
    concept,
    amount,
    date,
    type,
  }).then(() => {
    console.log("success");
  });
};
