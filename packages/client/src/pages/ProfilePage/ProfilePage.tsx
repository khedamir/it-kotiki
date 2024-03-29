import { Avatar, Button, Flex, Tabs, Typography } from 'antd';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { logout } from '../../utils/api/auth';
import { ENOTIFICATION_TYPE, EPATH } from '../../models/models';
import { ProfileDataView } from '../../components/ProfileDataView/ProfileDataView';
import { ProfileDataForm } from '../../components/ProfileDataForm/ProfileDataForm';
import { imgUrl } from '../../utils/api/consts';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setNotificationInfo } from '../../store/slices/notification.slice';
import { clearUserData, userSelector } from '../../store/slices/user.slice';

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
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id, avatar } = useSelector(userSelector);

	const handleLogout = () => {
		logout()
			.then(() => {
				localStorage.setItem('auth', 'false');
				dispatch(clearUserData());
				navigate(EPATH.SIGN_IN, { replace: true });
			})
			.catch(err => {
				dispatch(
					setNotificationInfo({
						text: ENOTIFICATION_TYPE.ERROR,
						type: err.reason,
					}),
				);
			});
	};

	if (!id) {
		return <Typography>loading...</Typography>;
	}

	return (
		<ProfilePageContent>
			<Avatar src={`${imgUrl}${avatar}`} size={112} icon={<UserOutlined />} />
			<Tabs
				defaultActiveKey="1"
				style={{ width: '100%' }}
				centered
				size="large"
				items={[
					{
						key: '1',
						label: 'Просмотр',
						children: <ProfileDataView />,
					},
					{
						key: '2',
						label: 'Редактирование',
						children: <ProfileDataForm />,
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
