import React from 'react'
import ItemElement from './ItemElement'

const TransactionHistory = () => {
    const dummyData = [
        {
            description: "Income",
            amount: 10000,
            type: "income"
        },
        {
            description: "Grocery",
            amount: 2000,
            type: "expenses"
        },
        {
            description: "Car",
            amount: 3000,
            type: "expenses"
        }
    ]
  return (
    <div className='history'>
        <h1>Transaction History</h1>
        <ul>
            {
                dummyData.map((element, index) => <ItemElement key={index} element={element} />)
            }            
        </ul>
        {
            dummyData.length === 0 && (
                <p>No transaction available.</p>
            )
        }
    </div>
  )
}

export default TransactionHistory