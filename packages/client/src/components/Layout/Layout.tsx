import { FC } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../Header/Header';
import { ConfigProvider, Layout as ALayout } from 'antd';
import { EPATH } from '../../models/models';
import { ANTD_CONFIG } from '../../constants/antd.config';
import { Notification } from '../Notification/Notification';

export const Layout: FC = () => {
	const { pathname } = useLocation();
	const isSignPage = [EPATH.SIGN_IN as string, EPATH.SIGN_UP as string].includes(pathname);

	return (
		<ConfigProvider theme={ANTD_CONFIG}>
			<Notification />
			<ALayout style={{ height: '100%' }}>
				{!isSignPage && <Header />}
				<ALayout.Content>
					<Outlet />
				</ALayout.Content>
				<ALayout.Footer style={{ textAlign: 'center' }}>
					&#169;IT-котики {new Date().getFullYear()}
				</ALayout.Footer>
			</ALayout>
		</ConfigProvider>
	);
};
