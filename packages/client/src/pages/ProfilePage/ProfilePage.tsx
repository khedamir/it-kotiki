import { Avatar, Button, Flex, Tabs, Typography } from 'antd';
import { useNavigate, useOutletContext } from 'react-router';
import styled from 'styled-components';
import { logout, me } from '../../utils/api/auth';
import { ENOTIFICATION_TYPE, EPATH } from '../../models/models';
import { ProfileDataView } from '../../components/ProfileDataView/ProfileDataView';
import { ProfileDataForm } from '../../components/ProfileDataForm/ProfileDataForm';
import { useEffect, useState } from 'react';
import { UserDTO } from './models/models';
import { imgUrl } from '../../utils/api/consts';
import { UserOutlined } from '@ant-design/icons';

const ProfilePageContent = styled(Flex)`
	flex-direction: column;
	align-items: center;
	width: 476px;
	margin: 32px auto;
`;

const ProfilePageBottom = styled(Flex)`
	width: 100%;
	justify-content: flex-end;
`;

export const ProfilePage = () => {
	const [userData, setUserData] = useState<UserDTO>();
	const navigate = useNavigate();
	const { openNotification } = useOutletContext();

	useEffect(() => {
		me().then(result => setUserData(result));
	}, []);

	const handleLogout = () => {
		logout()
			.then(() => {
				localStorage.setItem('auth', 'false');
				navigate(EPATH.SIGN_IN, { replace: true });
			})
			.catch(err => {
				openNotification(ENOTIFICATION_TYPE.ERROR, err.reason);
			});
	};

	if (!userData) {
		return <Typography>loading...</Typography>;
	}

	return (
		<ProfilePageContent>
			<Avatar src={`${imgUrl}${userData.avatar}`} size={112} icon={<UserOutlined />} />
			<Tabs
				defaultActiveKey="1"
				style={{ width: '100%' }}
				centered
				size="large"
				items={[
					{
						key: '1',
						label: 'Просмотр',
						children: <ProfileDataView data={userData} />,
					},
					{
						key: '2',
						label: 'Редактирование',
						children: <ProfileDataForm data={userData} />,
					},
				]}
			/>
			<ProfilePageBottom>
				<Button onClick={handleLogout} htmlType="button">
					Выйти
				</Button>
			</ProfilePageBottom>
		</ProfilePageContent>
	);
};
