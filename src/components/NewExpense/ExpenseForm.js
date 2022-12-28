import "./ExpenseForm.css";
import useSubmit from "../../hooks/submit";

import { useState } from "react";

const ExpenseForm = (props) => {
  const handleSubmit = useSubmit((values) => {
    props.submit({ id: `e${Math.random()}`, ...values });
    setShowForm(false);
  });
  const [showForm, setShowForm] = useState(false);
  let addNewExpense = (
    <button type="submit" onClick={() => setShowForm(true)}>
      Add New Expense
    </button>
  );
  if (!showForm) return addNewExpense;
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title"></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" name="amount"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={() => setShowForm(false)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
