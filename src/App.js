import React, { useEffect, useState } from 'react';
//import components
import Nav from './components/Nav';

function App() {
	const [info, setInfo] = useState([]);

	const data = () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => setInfo(json));
	};
	useEffect(() => {
		data();
	}, []);
	return (
		<div className="App text-lg flex flex-wrap">
			<Nav />
			{info.map((item) => (
				<div className="w-1/5 p-10">
					<h3 key={item.id}>{item.title}</h3>
					<h5 className="text-sm text-red-600">{item.body}</h5>
				</div>
			))}
		</div>
	);
}

export default App;
