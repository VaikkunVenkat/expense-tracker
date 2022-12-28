import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

import { useState, useEffect } from "react";

const Expenses = ({ expenses, deleteExpense }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  useEffect(() => {
    setFilteredExpenses(() => {
      if (filteredYear === "All") return expenses;
      return expenses.filter(
        (expense) => expense.date.getFullYear() === Number(filteredYear)
      );
    });
  }, [filteredYear, expenses]);

  return (
    <Card className="expenses">
      <ExpensesFilter saveFilteredYear={(year) => setFilteredYear(year)} />
      {filteredYear !== "All" && <ExpensesChart expenses={filteredExpenses} />}
      <ExpensesList expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </Card>
  );
};

export default Expenses;
