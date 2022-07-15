import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { EditExpense } from '../actions/expenses';
import CreateForm from './CreateForm'

const EditExpensePage = (props) => {
	const { id } = useParams();
	const expense = useSelector((state) => state.expenses.find((expense)=> expense.id === id))
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return(
		<div>
			<CreateForm
				expense = {expense}
				onSubmit = {(expense) => {
					dispatch(EditExpense(id, expense));
					navigate('/');
				}}
			/>
		</div>
	);
}

// const mapStateToProps = ( state, ownProps ) => {
// 	console.log(ownProps);
// 	return {
// 		expense: state.expenses.find((expense)=> expense.id === id)
// 	}
// }
export default EditExpensePage;