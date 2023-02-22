import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    const expenseDate = props.date
    const expenseTitle = props.title
    const expenseAmount = props.amount

    //const [title, setTitle] = useState(expenseTitle)

    //Should use the word Handler when something is not being done on the spot
    //const clickHandler = () => {
    //    setTitle('Updated!')
    //}

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expenseDate} />
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem