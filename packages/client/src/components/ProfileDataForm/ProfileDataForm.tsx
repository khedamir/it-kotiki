import React, { FC } from 'react';
import { ENOTIFICATION_TYPE, EPAGE_TYPE } from '../../models/models';
import { Form } from '../../components/Form/Form';
import styled from 'styled-components';
import { Flex } from 'antd';
import { UserDTO } from '../../pages/ProfilePage/models/models';
import { IProfileFormBody } from '../Form/models/models';
import { updateProfile } from '../../utils/api/user';
import { useOutletContext } from 'react-router';

interface IProps {
	data: UserDTO;
}

const DataContainer = styled(Flex)`
	flex-direction: column;
	width: 100%;
`;

export const ProfileDataForm: FC<IProps> = ({ data }) => {
	const { openNotification } = useOutletContext();

	const changeData = (values: IProfileFormBody) => {
		const { oldPassword, password, upload, ...rest } = values;
		return updateProfile({
			profileData: {
				...rest,
			},
			passwordData: {
				oldPassword,
				newPassword: password,
			},
			avatar: upload[0].originFileObj,
		})
			.then(() => {
				openNotification('success', 'Данные пользователя успешно обновлены');
			})
			.catch(errorReason => {
				openNotification(ENOTIFICATION_TYPE.ERROR, errorReason);
			});
	};
	return (
		<DataContainer>
			<Form type={EPAGE_TYPE.PROFILE} onSubmit={changeData} formData={data} />
		</DataContainer>
	);
};
