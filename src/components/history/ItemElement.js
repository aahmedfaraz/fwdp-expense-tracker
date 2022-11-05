import React from 'react'

const ItemElement = ({element: {description, amount, type}}) => {
  return (
    <li className='history-element'>
        <span>{description}</span>
        <span><small className={`${type}`}>USD</small> {formatNumber(amount)}</span>
    </li>
  )
}

const formatNumber = (number) => {
    return number.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export default ItemElement