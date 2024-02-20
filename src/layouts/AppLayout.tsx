import React from 'react';
import { Outlet } from 'react-router';
import { NavBar } from './NavBar';

export const AppLayout: React.FC = () => (
	<div>
		<NavBar />
		<Outlet />
	</div>
);
