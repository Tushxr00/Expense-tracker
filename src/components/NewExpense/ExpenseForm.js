import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    // const [enteredTitle, setEntertitle] = useState("")
    // const [enteredDate, setEnterDate] = useState("")
    // const [enteredAmount, setEnterAmount] = useState("")
    const [userInput, setUserInput] = useState({
      enteredTitle:"",
      enteredDate: "",
      enteredAmount: "",

    })

    const titleChangeHandler = (event )=>{
      // setEntertitle(event.target.value);
      setUserInput({
        ...userInput,
        enteredTitle: event.target.value
      })
    }
    const dateChangeHandler = (event )=>{
      // setEnterDate(event.target.value);
      setUserInput({
        ...userInput,
        enteredDate: event.target.value
      })
    }
    const amountChangeHandler = (event )=>{
      // setEnterAmount(event.target.value);
      setUserInput({
        ...userInput,
        enteredDate: event.target.value
      })
    }
  return (
    <form>
      <p>{userInput.enteredTitle}</p>
      <p>{userInput.enteredDate}</p>
      <p>{userInput.enteredAmount}</p>
      {/* <p>{userInput}</p> */}
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
