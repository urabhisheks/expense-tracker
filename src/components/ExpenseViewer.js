import React from "react";
import { connect } from "react-redux";
import classes from "./ExpenseViewer.module.css";

const ExpenseViewer = ({ expenses }) => {
  const renderExpense = () => {
    if (expenses.length) {
      return (
        <div className={classes.expenses}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Sub Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.date}</td>
                  <td>{expense.category}</td>
                  <td>{expense.subcategory}</td>
                  <td>{expense.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return null;
  };
  return (
    <div>
      <div className={classes.header}>Expense Summary</div>
      {renderExpense()}
    </div>
  );
};

const mapStateToProps = ({ expenses }) => ({
  expenses,
});

export default connect(mapStateToProps)(ExpenseViewer);
