import React, {useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.contents.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    
    //Two way binding on ExpenseFilter

    return (
        <div>
            <Card className='expenses'>
            <ExpensesChart expenses={filteredExpenses} />
            
            <ExpensesFilter selected={filteredYear} onChangeFilter ={filterChangeHandler} /> 
            
            <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}
export default Expenses