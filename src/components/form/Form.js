import React, {useState} from 'react'

const Form = ({ data, setData }) => {

  // State
  const [transaction, setTransaction] = useState({
    description: "",
    amount: 0,
    type: "expenses",
  })

  // Function
  const onChange = (e) => setTransaction({...transaction, [e.target.name]: e.target.value});

  const getTotalValues = () => {
      let totalIncome = 0;
      let totalExpenses = 0;
      data.forEach(transaction => {
          if(transaction.type === "income") {
              totalIncome += parseInt(transaction.amount);
          } else {
              totalExpenses += parseInt(transaction.amount);
          }
      });
      return {
          totalIncome,
          totalExpenses,
      }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { totalIncome, totalExpenses } = getTotalValues();
    if(transaction.description === "" || transaction.amount === 0) {
      return alert("Some credentials are missing.");
    }
    const currBalance = totalIncome - totalExpenses;
    if(transaction.type === "expenses" && currBalance < transaction.amount) {
      return alert("You don't have enough balance.");
    }
    setData([...data, transaction]);
    setTransaction({
      description: "",
      amount: 0,
      type: "expenses",
    })
  }


  // UI
  return (
    <form onSubmit={onSubmit}>
        <h1>Add Transaction</h1>
        {/* Description */}
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input type="text" id='description' name='description' value={transaction.description} onChange={onChange} placeholder='Enter Description' />
        </div>
        {/* Amount */}
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id='amount' name='amount' value={transaction.amount} onChange={onChange} placeholder='Enter Amount' />
        </div>
        {/* Type */}
        <div className="form-control">
          <label htmlFor="">Type</label>
          <div>
            <input type="radio" id='income' name='type' value={"income"} checked={transaction.type === 'income'} onChange={onChange} /> <label htmlFor="income">Income</label>
            <input type="radio" id='expenses' name='type' value={"expenses"} checked={transaction.type === 'expenses'} onChange={onChange} /> <label htmlFor="expenses">Expenses</label>
          </div>
        </div>
        {/* Submit */}
        <input type="submit" value="Add" />
    </form>
  )
}

export default Form