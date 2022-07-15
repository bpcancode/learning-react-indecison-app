

//FILTER_TEXT_SET

export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});


//FILTER_SORT_BY_AMOUNT

export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

//FILTER_SORT_BY_DATE

export const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

//SET_START_DATE
export const setStartDate = (startDate=0) => ({
	type: 'SET_START_DATE',
	startDate
})

//SET_END_DATE
export const setEndDate = (endDate=0) => ({
	type: 'SET_END_DATE',
	endDate
})