import { FC } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../Header/Header';
import { Layout as ALayout } from 'antd';
import { EPATH } from '../../models/models';

export const Layout: FC = () => {
	const { pathname } = useLocation();
	const isSignPage = pathname in [EPATH.SIGN_IN, EPATH.SIGN_UP];

	return (
		<ALayout style={{ height: '100vh' }}>
			{isSignPage && <Header />}
			<ALayout.Content style={{ overflowY: 'scroll' }}>
				<Outlet />
			</ALayout.Content>
			<ALayout.Footer style={{ textAlign: 'center' }}>&#169;IT-котики {new Date().getFullYear()}</ALayout.Footer>
		</ALayout>
	);
};
