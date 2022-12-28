import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses, deleteExpense }) => {
  return (
    <>
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            deleteExpenseItem={deleteExpense}
            {...expense}
          />
        ))
      ) : (
        <p className="expenses__empty">No expenses found</p>
      )}
    </>
  );
};

export default ExpensesList;
