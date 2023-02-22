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
    
    //Two way binding on ExpenseFilter

    return (
        <div>
            <Card className='expenses'>
            
            <ExpensesFilter selected={filteredYear} onChangeFilter ={filterChangeHandler} /> 
            {props.contents.map((expense) => (
                <ExpenseItem 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                    />
                ))}
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