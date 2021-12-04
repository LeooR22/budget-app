import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";

const FormRecord = ({ addForm }) => {
  const initialState = {
    concept: "",
    amount: "",
    date: "",
    type: "income",
  };

  const [inputs, handleChange, reset] = useForm(initialState);

  const { concept, amount, date, type } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();

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

    // addForm({
    //   concept: concept,
    //   amount: amount,
    //   date: date,
    //   type: type === "income" ? false : true,
    //   id: Date.now(),
    // });
    console.log(concept, amount, date, type);

    Swal.fire({
      title: "Success",
      text: "¡Record added!",
      icon: "success",
    });

    reset();
  };

  return (
    <>
      <h3>form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Concept"
          value={concept}
          onChange={handleChange}
          className="form-control mb-2"
          name="concept"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={handleChange}
          className="form-control mb-2"
          name="amount"
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={handleChange}
          className="form-control mb-2"
          name="date"
        />
        <select
          name="type"
          value={type}
          onChange={handleChange}
          className="form-control mb-2"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Create Record
        </button>
      </form>
    </>
  );
};

export default FormRecord;