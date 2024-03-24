import React, { FC } from 'react';
import { UserDTO } from '../../pages/ProfilePage/ProfilePage';
import { Flex, Typography } from 'antd';
import styled from 'styled-components';
import { DEEP_OCEAN } from '../../constants/color';

interface IProps {
	data: UserDTO;
}

const UserDataContainer = styled(Flex)`
	width: 100%;
	flex-direction: column;
	margin-bottom: 24px;
`;

const UserDataItem = styled(Flex)`
	width: 100%;
	justify-content: space-between;
	padding: 8px 0;
	border-bottom: 2px solid ${DEEP_OCEAN};

	* {
		color: ${DEEP_OCEAN};
	}
`;

export const ProfileDataView: FC<IProps> = ({ data }) => {
	return (
		<UserDataContainer>
			<UserDataItem>
				<Typography>Имя</Typography>
				<Typography>{data.first_name}</Typography>
			</UserDataItem>
			<UserDataItem>
				<Typography>Фамилия</Typography>
				<Typography>{data.second_name}</Typography>
			</UserDataItem>
			<UserDataItem>
				<Typography>Никнайм</Typography>
				<Typography>{data.login}</Typography>
			</UserDataItem>
			<UserDataItem>
				<Typography>Почта</Typography>
				<Typography>{data.email}</Typography>
			</UserDataItem>
			<UserDataItem>
				<Typography>Телефон</Typography>
				<Typography>{data.phone}</Typography>
			</UserDataItem>
		</UserDataContainer>
	);
};
