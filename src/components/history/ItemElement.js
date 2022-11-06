import React from 'react'

const ItemElement = ({element: {description, amount, type}, index, data, setData}) => {

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

  const deleteElement = () => {
    const {totalIncome, totalExpenses} = getTotalValues();
    const currBalance = totalIncome - totalExpenses;
    if(type === "income" && amount > currBalance) {
      return alert("To delete this income, you need to delete some of your expenses.");
    }
    setData(
      data.filter((val, ind) => ind !== index)
    )
  }

  return (
    <li className='history-element'>
        <span>{description}</span>
        <span><small className={`${type}`}>USD</small> {formatNumber(amount)}</span>
        <button onClick={deleteElement}><i className="fa-sharp fa-solid fa-xmark"></i></button>
    </li>
  )
}

const formatNumber = (number) => {
    return parseInt(number).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export default ItemElement