import React from 'react'
import ItemElement from './ItemElement'

const TransactionHistory = ({data, setData}) => {
  return (
    <div className='history'>
        <h1>Transaction History</h1>
        <ul>
            {
                data.map((element, index) => <ItemElement key={index} element={element} index={index} data={data} setData={setData} />)
            }            
        </ul>
        {
            data.length === 0 && (
                <p>No transaction available.</p>
            )
        }
    </div>
  )
}

export default TransactionHistory