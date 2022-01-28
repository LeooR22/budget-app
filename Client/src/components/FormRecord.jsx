import { useForm } from "../hooks/useForm";
import { alertsForm } from "../helpers/alertsForm";

const FormRecord = () => {
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

    alertsForm(e, concept, amount, date, type, reset);
  };

  return (
    <div className="d-flex justify-content-center">
      <div></div>
      <form onSubmit={handleSubmit} className="w-50 ">
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
        <button
          // onClick={addRecord}
          type="submit"
          className="btn btn-primary mb-2"
        >
          Create Record
        </button>
      </form>
    </div>
  );
};

export default FormRecord;
