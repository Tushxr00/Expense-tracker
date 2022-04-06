import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expesnes = [
    {
      id: `e1`,
      title: `Car Insurance`,
      amount: 296.74,
      date: new Date(2022, 4, 5),
    },
    {
      id: `e2`,
      title: `Car Insurance`,
      amount: 296.74,
      date: new Date(2022, 4, 5),
    },
    {
      id: `e3`,
      title: `Car Insurance`,
      amount: 296.74,
      date: new Date(2022, 4, 5),
    },
    {
      id: `e4`,
      title: `Car Insurance`,
      amount: 296.74,
      date: new Date(2022, 4, 5),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>hello hello</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
