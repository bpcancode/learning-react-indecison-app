import { addExpense, removeExpense, EditExpense } from '../actions/expenses';

const add = (a, b) => a+b;
const GenerateGretting = (name = 'Anoynomus') => `Hello! ${name}`

test('Should add two numbers', () => {
	expect(add(1,2)).toBe(3);
});

test('Should generate gretting', () => {
	expect(GenerateGretting('Bishal')).toBe('Hello! Bishal')
})

test('Should be Anoynomus', () => {
	expect(GenerateGretting()).toBe('Hello! Anoynomus')
})

test('Should add Expense', () => {
	expect(removeExpense( {id : 'abc123'})).toEqual(
	{
		type: 'REMOVE_EXPENSE',
		id: 'abc123'
	}
	)
})

test('should Update Expense', () => {
	const update = EditExpense('abc123', {note: 'Hello'})
	expect(update).toEqual({
		type:'EDIT_EXPENSE',
		id: 'abc123',
		update: {
			note: 'Hello'
		}
		
	})
})

test('should setup add expense with default values',() => {
	const expense = {
		description: '',
		note: '', 
		amount: 0, 
		createdAt: 0 
	};
	const action = addExpense(expense);

	expect(action).toEqual({
		type:'ADD_EXPENSE',
		expense: {
			...expense,
			id: expect.any(String)
		}
	})