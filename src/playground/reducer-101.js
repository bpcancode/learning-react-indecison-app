import { createStore, combineReducers} from 'redux'
import { v4 as uuid } from 'uuid';


//ADD EXPENSE
const addExpense = (
	{ 
		description = '',
		note = '', 
		amount = 0, 
		createdAt = 0 
	} = {}
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
})

// EDIT_EXPENSE

const EditExpense = (id, update) => ({
	type: 'EDIT_EXPENSE',
	id,
	update
})


//FILTER_TEXT_SET

const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});


//FILTER_SORT_BY_AMOUNT

const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

//FILTER_SORT_BY_DATE

const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

//SET_START_DATE
const setStartDate = (startDate=0) => ({
	type: 'SET_START_DATE',
	startDate
})

//SET_END_DATE
const setEndDate = (endDate=0) => ({
	type: 'SET_END_DATE',
	endDate
})

//EXPENSE REDUCER
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch(action.type){
		case 'ADD_EXPENSE':
			return ([
				...state,
				action.expense
			]);
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id)
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if(expense.id === action.id) {
					return {
						...expense,
						...action.update
					};
				} else {
					return expense;
				}
			})
		default:
			return state;

	}
}

//FILTERS REDUCER
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
}

const filtersReducer = (state=filtersReducerDefaultState, action) => {
	switch(action.type){
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			}
		default:
			return state;
	}
}


// STORE CREATION

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if( sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		}
		if( sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	})
}

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
})

const itemOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 1000 }))
const itemTwo = store.dispatch(addExpense({ description: 'Food', amount: 3000, createdAt: -1400 }))

// // console.log(itemOne.expense.id);

// store.dispatch(EditExpense(itemTwo.expense.id, { amount: 500 }))
// store.dispatch(removeExpense({ id: itemOne.expense.id }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(200))
// store.dispatch(setEndDate())



const demoState = {
	expenses: [{
		id: 'poidjfjds',
		description: 'january rent',
		note: 'This was the final payment for that address',
		amount: 21000,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
}

// const user = {
// 	name: 'bishal'
// }

// console.log(...user)