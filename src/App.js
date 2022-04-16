import { useState } from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: `e1`,
    title: `Crypto`,
    amount: 3000,
    date: new Date(2022, 3, 2),
  },
  {
    id: `e2`,
    title: `Anime`,
    amount: 5000,
    date: new Date(2021, 6, 1),
  },
  {
    id: `e3`,
    title: `Games`,
    amount: 700,
    date: new Date(2022, 5, 5),
  },
  {
    id: `e4`,
    title: `Car Insurance`,
    amount: 10000,
    date: new Date(2021, 9, 8),
  },
  {
    id: `e5`,
    title: `Gym`,
    amount: 900,
    date: new Date(2022, 4, 4),
  },
  {
    id: `e6`,
    title: `Rent`,
    amount: 1000,
    date: new Date(2021, 1, 1),
  },
  {
    id: `e7`,
    title: `Rent`,
    amount: 1250,
    date: new Date(2022, 1, 1),
  },
  {
    id: `e8`,
    title: `Rent`,
    amount: 1500,
    date: new Date(2023, 1, 1),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense,...expenses])
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
