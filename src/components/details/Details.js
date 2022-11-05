import React from 'react'

const Details = () => {
  return (
    <div className='details'>
        <div className="current-balance">
            <h1>Current Balance</h1>
            <div className="circle-element">
                <h2>70<small>%</small></h2>
            </div>
            <p><small>USD</small> {formatNumber(70000)}</p>
        </div>
        <div className="current-amounts">
            <p>
                <span>Total Income</span>
                <span><small>USD</small> {formatNumber(100000)}</span>
            </p>
            <p>
                <span>Total Expenses</span>
                <span><small>USD</small> {formatNumber(30000)}</span>
            </p>
        </div>
    </div>
  )
}

const formatNumber = (number) => {
    return number.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export default Details