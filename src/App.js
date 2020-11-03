import React, { useState } from "react";
import moment from "moment";
import Header from "./components/Header";
import actions from "./actions";
import { connect } from "react-redux";

import "./App.css";
import Calendar from "./components/Calendar";
import Dropdown from "./components/Dropdown";
import ExpenseViewer from "./components/ExpenseViewer";

function App({ categories, addExpense, expenses }) {
  const [date, setDate] = useState(moment());
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [toggle, setToggle] = useState("false");

  const handleClick = (e) => {
    e.preventDefault();
    addExpense({
      category,
      subcategory,
      amount,
      date: date.format("MMM/DD/YYYY"),
    });
    setCategory("");
    setSubcategory("");
    setAmount("");
    setDate(moment());
  };

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleClick}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <div>
            <div>
              <Dropdown
                title="Select Category"
                value={category}
                list={Object.keys(categories)}
                setHeader={setCategory}
              />
            </div>
            <div>
              <Dropdown
                title="Select Sub Category"
                value={subcategory}
                allowed={false}
                list={category ? categories[category] : []}
                setHeader={setSubcategory}
              />
            </div>
            <div>
              <input
                placeholder="Amount"
                className="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <button
              disabled={
                category && subcategory && amount && date ? false : true
              }
              className={
                category && subcategory && amount && date
                  ? "expense"
                  : "expense not-allowed"
              }
              onClick={handleClick}
            >
              Add Expense
            </button>
          </div>
          <div style={{ height: "270px" }}>
            <input
              className="date"
              readOnly
              value={date.format("MM/DD/YY")}
              onBlur={() => setToggle(false)}
              onFocus={() => setToggle(true)}
            />
            {toggle ? <Calendar date={date} onChange={setDate} /> : null}
          </div>
        </div>
      </form>
      {expenses.length ? <ExpenseViewer /> : null}
    </div>
  );
}

const mapStateToProps = ({ categoryList, expenses }) => ({
  categories: categoryList,
  expenses,
});

const { addExpense } = actions;
export default connect(mapStateToProps, { addExpense })(App);
