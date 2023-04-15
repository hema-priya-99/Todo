import React,{useState} from "react";

import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import  ExpenseChart from "./ExpenseChart";

const Expenses= (props)=>{
    const [year,selectedYear]=useState('2020');

    const yearChange=(choosenYear)=>{
        console.log(choosenYear);
        selectedYear(choosenYear);
    }

    const filteredDetails=props.items.filter((expense)=>{
        return expense.date.getFullYear().toString() === year
    });

    return (
        <div className="expensePage">
 <Card className="expenses">
 <ExpenseFilter selected={year} onSave={yearChange}/>
 <ExpenseChart expenses={filteredDetails}/>
 <ExpensesList items={filteredDetails}/>
</Card>
</div>
    );
}

export default Expenses;