import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const buyDate = props.date

    const month = buyDate.toLocaleString('en-US', { month: 'long' })
    const day = buyDate.toLocaleString('en-US', { day: '2-digit' })
    const year = buyDate.getFullYear()

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}
export default ExpenseDate