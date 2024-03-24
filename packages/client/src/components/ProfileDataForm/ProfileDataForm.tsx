import React, { FC } from 'react';
import { UserDTO } from '../../pages/ProfilePage/ProfilePage';
import { EPAGE_TYPE } from '../../models/models';
import { Form } from '../../components/Form/Form';
import styled from 'styled-components';
import { Flex } from 'antd';

interface IProps {
	data: UserDTO;
}

const DataContainer = styled(Flex)`
	flex-direction: column;
	width: 100%;
`;

export const ProfileDataForm: FC<IProps> = () => {
	return (
		<DataContainer>
			<Form type={EPAGE_TYPE.SIGNUP} onSubmit={() => alert('submit')} />
		</DataContainer>
	);
};
