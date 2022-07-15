import { v4 as uuid } from 'uuid'

export const addExpense = (
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
		amount,
		note,
		createdAt
	}
});

// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
})

// EDIT_EXPENSE

export const EditExpense = (id, update) => ({
	type: 'EDIT_EXPENSE',
	id,
	update
})
