import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
	<div>
		<input type="text" value ={props.filters.text} onChange={(e)=>(
			props.dispatch(setTextFilter(e.target.value))
		)} />

		<select onChange = {(e) => {
			if(e.target.value === 'date') {
				props.dispatch(sortByDate());
			} else if(e.target.value === 'amount'){
				props.dispatch(sortByAmount());
			}
		}}>
			<option value="date">date</option>
			<option value="amount">amount</option>
		</select>
	</div>
);

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
}

export default connect(mapStateToProps)(ExpenseListFilters);