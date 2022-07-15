import { NavLink } from 'react-router-dom';

const Header = () => (
	<div>
		<h1 className="app-title">Expensify</h1>
		<div className = "header-nav-links">
			<NavLink to="/" className={(navData) => (navData.isActive ? "is-active nav-links" : "nav-links")}>Dashboard</NavLink>
			<NavLink to="/create" className={(navData) => (navData.isActive ? "is-active nav-links" : "nav-links")}>create Dashboard</NavLink>
			<NavLink to="/help" className={(navData) => (navData.isActive ? "is-active nav-links" : "nav-links")}>help</NavLink>
		</div>
	</div>
);

export default Header;