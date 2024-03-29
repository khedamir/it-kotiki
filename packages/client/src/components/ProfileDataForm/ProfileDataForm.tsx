import React, { FC } from 'react';
import { ENOTIFICATION_TYPE, EPAGE_TYPE } from '../../models/models';
import { Form } from '../Form/Form';
import styled from 'styled-components';
import { Flex } from 'antd';
import { IProfileFormBody } from '../Form/models/models';
import { updateProfile } from '../../utils/api/user';
import { useDispatch, useSelector } from 'react-redux';
import { setNotificationInfo } from '../../store/slices/notification.slice';
import { setUserAvatar, setUserData, UserDTO, userSelector } from '../../store/slices/user.slice';

const DataContainer = styled(Flex)`
	flex-direction: column;
	width: 100%;
`;

export const ProfileDataForm: FC = () => {
	const dispatch = useDispatch();
	const data = useSelector(userSelector);

	const changeData = (values: IProfileFormBody) => {
		const { oldPassword, newPassword, upload, ...rest } = values;
		return updateProfile({
			profileData: {
				...rest,
			},
			passwordData: {
				oldPassword,
				newPassword,
			},
			avatar: upload && upload[0].originFileObj,
		})
			.then(data => {
				dispatch(setUserData(data.profile));
				if (data?.avatar) dispatch(setUserAvatar({ avatar: data.avatar.avatar }));
				dispatch(
					setNotificationInfo({
						type: ENOTIFICATION_TYPE.SUCCESS,
						text: 'Данные пользователя успешно' + ' обновлены',
					}),
				);
			})
			.catch(errorReason => {
				dispatch(
					setNotificationInfo({
						type: ENOTIFICATION_TYPE.ERROR,
						text: errorReason,
					}),
				);
			});
	};
	return (
		<DataContainer>
			<Form<UserDTO> type={EPAGE_TYPE.PROFILE} onSubmit={changeData} initialData={data} />
		</DataContainer>
	);
};
