import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useMemo } from 'react';
import { Search } from '../components/Search.tsx';

type NavLinkType = {
	title: string;
	link: string;
	variant: 'outlined' | 'contained';
};

export const NavBar: React.FC = () => {
	const { pathname } = useLocation();

	const navLinks: NavLinkType[] = useMemo(
		() => [
			{
				title: 'Posts',
				link: '/',
				variant: pathname === '/' ? 'contained' : 'outlined'
			},
			{
				title: 'Create post',
				link: '/create-post',
				variant: pathname === '/create-post' ? 'contained' : 'outlined'
			}
		],
		[pathname]
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ bgcolor: '#fff' }}>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', gap: '20px' }}>
						{navLinks.map(({ title, link, variant }) => (
							<Button color="error" key={title} variant={variant} component={NavLink} to={link}>
								{title}
							</Button>
						))}
					</Box>
					{pathname !== '/create-post' && (
						<Search />
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};
