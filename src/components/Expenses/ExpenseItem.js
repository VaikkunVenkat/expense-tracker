import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import Card from "../UI/Card";

const ExpenseItem = ({ deleteExpenseItem, ...expense }) => {
  const [title, setTitle] = useState(expense.title);
  const clickHandler = () => {
    setTitle("Random Update");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={() => deleteExpenseItem(expense.id)}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
