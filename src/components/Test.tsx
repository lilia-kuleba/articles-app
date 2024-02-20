import * as React from 'react';
import { useEffect, useState } from 'react';

export const Test: React.FC = () => {
	const [name, setName] = useState('');
	const [show, setShow] = useState(false);

	useEffect(() => {
		console.log(name);
	}, [name]);

	return (
		<div>
			<input value={name} onChange={(event) => setName(event.target.value)} />
			{show && <div>abadakedabra</div>}
			<button onClick={() => setShow((prevState) => !prevState)}>
				{!show ? 'Show' : 'Hide'}
			</button>
		</div>
	);
};
