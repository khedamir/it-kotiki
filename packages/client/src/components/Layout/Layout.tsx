import { FC } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout: FC = () => (
	<>
		<Header />
		<main>
			<Outlet />
		</main>
		<Footer />
	</>
);
