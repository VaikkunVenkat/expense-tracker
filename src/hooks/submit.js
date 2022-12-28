const getFormValues = (event) => {
  const data = new FormData(event.currentTarget);
  return Object.fromEntries(data.entries());
};

const useSubmit = (fn) => {
  return (event) => {
    event.preventDefault();
    const values = getFormValues(event);
    values.date = new Date(values.date);
    values.amount = Number(values.amount);
    event.target.reset();
    return fn(values);
  };
};

export default useSubmit;
