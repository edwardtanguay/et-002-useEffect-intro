import { useState, useEffect } from 'react';

import './App.scss';

const employeesUrl = 'https://edwardtanguay.vercel.app/share/employees.json';

function App() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(employeesUrl);
			const _employees = await response.json();
			setEmployees(_employees);
		})();
	}, []);



	return (
		<div className="App">
			<h1>useEffect Intro</h1>
			<h2>There are {employees.length} employees.</h2>
		</div>
	);
}

export default App;
