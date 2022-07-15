import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './../components/Header';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import EditExpensePage from './../components/EditExpensePage';
import NotFoundPage from './../components/NotFoundPage';
import HelpPage from './../components/HelpPage';
import AddExpensePage from './../components/AddExpensePage';


const AppRouter = () => (
	<BrowserRouter>
	<div>
		<Header />
	</div>
		<Routes>
			<Route path="/" element=<ExpenseDashboardPage /> />
			<Route path="/create" element=<AddExpensePage /> />
			<Route path="/edit/:id" element=<EditExpensePage /> />
			<Route path="/help" element=<HelpPage /> />
			<Route path="/*" element=<NotFoundPage /> />

		</Routes>
	</BrowserRouter>
);

export default AppRouter;