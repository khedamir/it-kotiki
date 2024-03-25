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

const Items = {
	first_name: 'Имя',
	second_name: 'Фамилия',
	login: 'Никнeйм',
	email: 'Почта',
	phone: 'Телефон',
};

export const ProfileDataView: FC<IProps> = ({ data }) => {
	return (
		<UserDataContainer>
			{Object.keys(Items).map(key => (
				<UserDataItem>
					<Typography>{Items[key as keyof typeof Items]}</Typography>
					<Typography>{data[key]}</Typography>
				</UserDataItem>
			))}
		</UserDataContainer>
	);
};
