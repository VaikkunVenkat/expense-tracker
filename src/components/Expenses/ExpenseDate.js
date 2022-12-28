import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const dateFormatted = {
    month: date.toLocaleString("en-US", { month: "long" }),
    day: date.toLocaleString("en-US", { day: "2-digit" }),
    year: date.getFullYear(),
  };
  return (
    <div className="expense-date">
      <div className="expense-date__month">{dateFormatted.month}</div>
      <div className="expense-date__year">{dateFormatted.year}</div>
      <div className="expense-date__day">{dateFormatted.day}</div>
    </div>
  );
};

export default ExpenseDate;
