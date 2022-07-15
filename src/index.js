import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './style/index.css';

const store = configureStore();
const state = store.getState();

store.dispatch(addExpense({description:'Water bill', amount:'300', createdAt:0}))
store.dispatch(addExpense({description:'rent bill', amount:'4300', createdAt:0}))


const jnx = (
	<Provider store = {store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jnx, document.getElementById('root'));