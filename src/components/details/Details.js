import React from 'react'

const Details = ({ data }) => {

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

    const { totalIncome, totalExpenses } = getTotalValues();

    const getCurrBalancePercentage = () => {
        const { totalIncome, totalExpenses } = getTotalValues();
        const currBalance = totalIncome - totalExpenses;
        return Math.round((currBalance * 100) / totalIncome) || 0;
    }

  return (
    <div className='details'>
        <div className="current-balance">
            <h1>Current Balance</h1>
            <div className="circle-element">
                <h2>{getCurrBalancePercentage(totalIncome, totalExpenses)}<small>%</small></h2>
            </div>
            <p><small>USD</small> {formatNumber(totalIncome - totalExpenses)}</p>
        </div>
        <div className="current-amounts">
            <p>
                <span>Total Income</span>
                <span><small>USD</small> {formatNumber(totalIncome)}</span>
            </p>
            <p>
                <span>Total Expenses</span>
                <span><small>USD</small> {formatNumber(totalExpenses)}</span>
            </p>
        </div>
    </div>
  )
}

const formatNumber = (number) => {
    return parseInt(number).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export default Details