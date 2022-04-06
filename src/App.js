import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
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
      date: new Date(2022, 6, 1),
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
      date: new Date(2022, 9, 8),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>hello hello</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
