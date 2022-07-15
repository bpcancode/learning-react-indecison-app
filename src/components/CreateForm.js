import { useState } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const CreateForm = (props) => {
	const [ description, setDescription ] = useState(props.expense ? props.expense.description: '');
	const [ note, setNote ] = useState(props.expense ? props.expense.note : '');
	const [ amount, setAmount ] = useState(props.expense ? (props.expense.amount)/100 : '');
	const [ createdAt, setCreatedAt ] = useState(props.expense ? props.expense.createdAt : 0);
	const [ error, setError ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		if(!description || !amount || !createdAt) {
			setError('Please provide Description, amount and date');
		} else {
			setError('');
			props.onSubmit({
				description,
				amount: parseFloat(amount)*100,
				createdAt: createdAt.valueOf(),
				note
			})
		}
	}

	return (
		<div>
			<form className="add-note-form" onSubmit= { onSubmit }>
			{ error }
				<input 
					type="text" 
					value = { description }
					placeholder = "Title"
					onChange = {(e) => setDescription(e.target.value)}
				/>

				<input 
					type="text"
					value= { amount }
					placeholder="Amount"
					onChange= {(e) => {
						const val = e.target.value;
						if( !val || val.match(/^\d{1,}(\.\d{0,2})?$/)) {
							setAmount(e.target.value);
						}
					}}
				/>

				<DatePicker 
					selected={createdAt} 
					onChange={ createdAt => setCreatedAt(createdAt)}
				/>
				<textarea 
					placeholder="Enter your note"
					value = { note }
					onChange = {(e) => setNote(e.target.value)}
				/>

				<button className="btn">add</button>

			</form>
		</div>
	);
}

export default CreateForm;

