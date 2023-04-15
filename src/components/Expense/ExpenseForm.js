import React,{useState} from "react";

import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    //separate state for every event

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    //Single state for everything
    // const[userInput,setUserInput]=useState({
    //     enteredTitle :'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler=(event)=>{
setEnteredTitle(event.target.value);

// setUserInput({...userInput,enteredTitle:event.target.value});
// console.log(setUserInput);

//Best method is to use fn as react use sheduled execution,above code may end up reflecting some other state
// setUserInput((prevState)=>{
//     return ({...prevState,enteredTitle:event.target.value})
// });
    };

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({...userInput,enteredAmount:event.target.value});
        // console.log(setUserInput);
            };
            const dateChangeHandler=(event)=>{
                setEnteredDate(event.target.value);
                // setUserInput({...userInput,enteredDate:event.target.value});
                // console.log(setUserInput);
                    };

  //submit button
    const submitHandler=(event)=>{
      event.preventDefault();

        const expenseData ={
            title:enteredTitle,
            amount: +enteredAmount,
            date:new Date(enteredDate)
                            };
     props.onSavedExpense(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
                        }

    return (
        <form onSubmit={submitHandler}>
<div className="new-expense__controls">
    <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" value={enteredAmount} step='0.01' min='0.01' onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
        <label>Date</label>
        <input type="date"  value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
        </div>
        </div>
           <div><button className="new-expense__actions" type="button" onClick={props.onCancel}>Cancel</button>
           <button className="new-expense__actions" type="submit">Submit</button></div>
    </form>
    );
};

export default ExpenseForm;