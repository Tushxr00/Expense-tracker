import Card from "../Ui/Card";
import "./Expense.css";
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList expense={filteredExpense}/>
    </Card>
  );
};

export default Expense;
