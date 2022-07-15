import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import CreateForm from './CreateForm';
import { useNavigate } from 'react-router-dom';
import '../style/index.css';


const AddExpensePage = (props) => {
	const navigate = useNavigate();
	return(
		<div className= 'AddExpensePage'>
			<CreateForm 
				onSubmit = {(expense)=> {
					console.log(expense);
					props.dispatch(addExpense(expense));
					navigate('/');
				}}
			/>
		</div>
	);
};

export default connect()(AddExpensePage);