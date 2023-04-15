import React from "react";
import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList=(props)=>{
    let content;
    if(props.items.length===0){
     content = <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }
    return (
        <ul className="expenses-list">
            {content};
        {props.items.map((expense)=>(
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
             ))
        };
        </ul>
    )

}

export default  ExpensesList;