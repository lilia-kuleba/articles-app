import axios from 'axios';

const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 1000,
	headers: {
		post: { 'Content-Type': 'application/json' },
		'X-Api-Key': import.meta.env.VITE_API_KEY
	}
});

export { axiosClient };
