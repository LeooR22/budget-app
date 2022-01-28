import Swal from "sweetalert2";
import { addRecord } from "./addRecord";

export const alertsForm = (e, concept, amount, date, type, reset) => {
  if (!concept.trim()) {
    e.target[0].focus();
    return Swal.fire({
      title: "Error",
      text: "Empty concept field",
      icon: "error",
    });
  }
  if (!amount.trim()) {
    e.target[1].focus();
    return Swal.fire({
      title: "Error",
      text: "Empty amount field",
      icon: "error",
    });
  }
  if (!date.trim()) {
    e.target[2].focus();
    return Swal.fire({
      title: "Error",
      text: "Empty date field",
      icon: "error",
    });
  }

  Swal.fire({
    title: "Success",
    text: "¡Record added!",
    icon: "success",
  });

  addRecord(concept, amount, date, type);

  reset();
};
