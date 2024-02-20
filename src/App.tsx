import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ArticlesList } from './components/ArticlesList.tsx';
import { store } from './store';
import { AppLayout } from './layouts/AppLayout.tsx';
import { NotFound } from './components/NotFound';
import { CreateArticle } from './components/CreateArticle.tsx';

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<ArticlesList />} />
						<Route path="create-post" element={<CreateArticle />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</Router>
		</Provider>
	);
};
