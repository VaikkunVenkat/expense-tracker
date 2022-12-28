import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm submit={props.addExpense} />
    </div>
  );
};

export default NewExpense;
