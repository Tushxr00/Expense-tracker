import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.expense.length === 0) {
    return <h2 className="expense-list__fallback">no expense item found</h2>;
  }

  return (
    <ul className="expense-list">
      {props.expense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
