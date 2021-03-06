import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';




const NoteApp = () => {

	const notesData = JSON.parse(localStorage.getItem('notes'))
	const [notes, setNotes] = useState(notesData || []);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	

	const addNote = (e) => {
		e.preventDefault();
		setNotes([
			...notes,
			{
				title, 
				body 
			}
		])
		setTitle('');
		setBody('');
	}

	const removeNote = (title) => {
		setNotes(notes.filter((note) => note.title != title))
	}

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes))
	})

	return(
		<div>
			<h1>Notes</h1>
			{notes.map((note) => (
				<div key={note.title}>
					<h3>{note.title}</h3>
					<p>{note.body}</p>
					<button onClick={() => removeNote(note.title)}>remove</button>
				</div>
			))}
			<p>Add note</p>
			<form onSubmit={addNote}>
				<input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
				<textarea value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
				<button >Add</button>
			</form>
		</div>
	);
}


// const Counter = (props) => {

// 	const [ count, setCount ] = useState(props.count);

// 	// const increment = () => {
// 	// 	setCount(count+1);
// 	// }

// 	return(
// 		<div>
// 			<h1>Count = { count }</h1>
// 			<button onClick ={() => setCount(count+1)} > +1</button>
// 			<button onClick = {() => setCount(props.count)}> reset </button>
// 			<button onClick = {() => setCount(count-1)}> -1 </button>
// 		</div>
// 	);
// }

// Counter.defaultProps = {
// 	count: 0
// }



ReactDOM.render(<NoteApp/>, document.getElementById('root'));