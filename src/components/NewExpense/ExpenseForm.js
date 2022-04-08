import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  useState();
    let log = ""
    const [events,setEvent] = useState(log)

    const titleChangeHandler = (event) => {
        setEvent(event.target.value)
        console.log(event.target.value)
        console.log("title changed")
    }

  return (
    <form>
      <p>{events}</p>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
