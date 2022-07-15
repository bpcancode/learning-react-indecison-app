import ReactDOM from 'react-dom'

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is {props.info}</p>
	</div>
);

const withAdminWaring = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is the private info. Plese don't share!</p>}
			<WrappedComponent {...props}/>
		</div>
	)
};

const requireAthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAthenticated ? <WrappedComponent {...props} /> : <h1>Plese athenticate to continue</h1>}
		</div>
	)
}
const AuthInfo = requireAthentication(Info);
const AdminInfo = withAdminWaring(Info);


ReactDOM.render(<AuthInfo isAthenticated={true} info="These are the information"/>, document.getElementById('root'));