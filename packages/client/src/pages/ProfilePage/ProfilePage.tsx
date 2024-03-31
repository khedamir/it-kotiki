import { Button, Flex, Tabs, Typography } from 'antd';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { logout } from '../../utils/api/auth';
import { ENOTIFICATION_TYPE, EPATH } from '../../models/models';
import { ProfileDataView } from './ProfileDataView/ProfileDataView';
import { ProfileDataForm } from './ProfileDataForm/ProfileDataForm';
import { useSelector } from 'react-redux';
import { setNotificationInfo } from '../../store/slices/notification.slice';
import { clearUserData, userSelector } from '../../store/slices/userSlice/user.slice';
import { ProfileAvatar } from './ProfileAvatar/ProfileAvatar';
import { ProfilePasswordForm } from './ProfilePasswordForm/ProfilePasswordForm';
import { useAppDispatch } from '../../store/store';

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
	const dispatch = useAppDispatch();
	const { id } = useSelector(userSelector);

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
			<ProfileAvatar />
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
					{
						key: '3',
						label: 'Смена пароля',
						children: <ProfilePasswordForm />,
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
