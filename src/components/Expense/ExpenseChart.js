
import Chart from "../Chart/Chart";

const ExpenseChart = (props) =>{
    // console.log(props.expenses[0].date.getMonth())
    const chartDataPoints = [
        {label: "Jan", value:0},
        {label: "Feb", value:0},
        {label: "Mar", value:0},
        {label: "Apr", value:0},
        {label: "May", value:0},
        {label: "Jun", value:0},
        {label: "Jul", value:0},
        {label: "Aug", value:0},
        {label: "Sep", value:0},
        {label: "Oct", value:0},
        {label: "Nov", value:0},
        {label: "Dec", value:0},
    ];    
    
    let totalExpense = 0

    for (const expense of props.expenses ) {
        console.log(expense)
        const expenseMonth = expense.date.getMonth();  // starting at jan which has a value 0
        chartDataPoints[expenseMonth].value += expense.amount
        totalExpense += expense.amount;
   
    }   
    console.log(totalExpense)
    return <Chart dataPoints={chartDataPoints} max={totalExpense}/>
};

export default ExpenseChart
