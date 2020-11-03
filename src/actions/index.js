const types = {
  ADD_EXPENSE: "ADD_EXPENSE",
};

const addExpense = (expense) => ({
  type: types.ADD_EXPENSE,
  payload: expense,
});

export default { addExpense, types };
