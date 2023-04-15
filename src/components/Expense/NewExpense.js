import React,{useState} from "react";

import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense=(props)=>{
    const[val,setValue]=useState(0);

    const savedExpenseHandler=(expenses)=>{
        const savedExpense={...expenses,id:Math.random().toString()};
        console.log(savedExpense);
        props.onAddExpense(savedExpense);
setValue(0);
    }
    //newExpenseFoem show/hide

const formHandler=()=>{
    setValue(1);
}
const hideForm=()=>{
setValue(0);
}
let content;
if(val===0){
    content =<button className="new-expense__actions" onClick={formHandler}>Add new Expense</button>
}else{
   content= <ExpenseForm onSavedExpense={savedExpenseHandler} onCancel={hideForm} ></ExpenseForm>
}

    return (
        <div className="new-expense" >
            {content}
           
        </div>
    )
}

export default NewExpense;