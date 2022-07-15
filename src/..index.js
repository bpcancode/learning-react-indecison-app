import { createStore, combineReducer } from 'redux';


const incrementCount = ( { incrementBy = 1 } ={} ) => ({
		type: "INCREMENT",
		incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
	type: "DECREMENT",
	decrementBy
})

const reset = ({ count }) => ({
	type: "RESET",
	count: 0
});

const countReducer = (state = { count:0 }, action) => {

	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count+ action.incrementBy
			};

		case 'DECREMENT':
			return {
				count: state.count- action.decrementBy
			};

		case 'RESET':
			return {
				count: 0
			};

		default:
			return state;
	}
};

const store = createStore(countReducer);

const unsubsribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount( { incrementBy: 5} ));

store.dispatch(reset( { count: 100} ));

store.dispatch(decrementCount( { decrementBy: 10} ));

store.dispatch(decrementCount());

const demoState = {
	expense: [{
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
};
