import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEntertitle] = useState("")
    const [enteredDate, setEnterDate] = useState("")
    const [enteredAmount, setEnterAmount] = useState("")

    const titleChangeHandler = (event )=>{
      setEntertitle(event.target.value);
    }
    const dateChangeHandler = (event )=>{
      setEnterDate(event.target.value);
    }
    const amountChangeHandler = (event )=>{
      setEnterAmount(event.target.value);
    }
  return (
    <form>
      <p>{enteredTitle}</p>
      <p>{enteredDate}</p>
      <p>{enteredAmount}</p>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"  onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2023-12-31"   onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
