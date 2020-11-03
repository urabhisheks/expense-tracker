import actions from "../actions";

const initiaState = {
  expenses: [],
  categoryList: {
    Food: ["Groceries", "Veggies", "Milk"],
    Living: ["Rent", "Parking"],
    Clothing: ["Shirt", "Jeans"],
  },
};

const expenseReducer = (state = initiaState, action) => {
  switch (action.type) {
    case actions.types.ADD_EXPENSE:
      const { category, subcategory, date, amount } = action.payload;
      return {
        ...state,
        expenses: [...state.expenses, { category, subcategory, amount, date }],
      };
    default:
      return state;
  }
};

export default expenseReducer;
