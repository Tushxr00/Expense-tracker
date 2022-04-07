import Expense from "./components/Expense/Expense";
const App = () => {
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
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
