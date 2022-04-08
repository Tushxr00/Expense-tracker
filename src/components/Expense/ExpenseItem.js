import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const log = () => {
    console.log(`click clicked lick`)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={log} >Change  title</button>
    </Card>
  );
};

export default ExpenseItem;
