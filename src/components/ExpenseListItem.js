import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (

	<div>
		<Link to={ `/edit/${id}` }><h3> {description} </h3> </Link>
		<p>{amount} - {createdAt}</p>
		<button onClick={() => {
			dispatch(removeExpense({ id }))
		}}> remove </button>
	</div>
);



export default connect()(ExpenseListItem);

