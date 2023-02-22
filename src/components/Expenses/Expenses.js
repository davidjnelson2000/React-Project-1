import React, {useState} from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.contents.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expensesContent = <p>No expenses found</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem 
            key={expense.id} // key is added to identify the individual items
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} 
            />
        ))}
    
    //Two way binding on ExpenseFilter

    return (
        <div>
            <Card className='expenses'>
            
            <ExpensesFilter selected={filteredYear} onChangeFilter ={filterChangeHandler} /> 
            
            {expensesContent}
            {/* <ExpenseItem
                title={content[0].title}
                amount={content[0].amount}
                date={content[0].date} />
            <ExpenseItem
                title={content[1].title}
                amount={content[1].amount}
                date={content[1].date} />
            <ExpenseItem
                title={content[2].title}
                amount={content[2].amount}
                date={content[2].date} />
            <ExpenseItem
                title={content[3].title}
                amount={content[3].amount}
                date={content[3].date} /> */}
            </Card>
        </div>
    )
}
export default Expenses