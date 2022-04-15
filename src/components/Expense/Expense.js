import ExpenseItem from "./ExpenseItem";
import Card from "../Ui/Card";
import "./Expense.css";
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
})
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpense.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expense;
