import Chart from "../Chart/Chart";

const summation = (arr) => {
  return arr.reduce((accumulator, { amount }) => {
    return accumulator + amount;
  }, 0);
};

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  const totalAmount = summation(expenses);
  chartDataPoints.forEach((dataPoint) => {
    dataPoint.value = summation(
      expenses.filter(
        (e) =>
          e.date.toLocaleString("en-US", { month: "short" }) === dataPoint.label
      )
    );
  });
  return <Chart max={totalAmount} dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
