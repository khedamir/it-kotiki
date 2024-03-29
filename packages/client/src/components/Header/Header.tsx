import { FC, useEffect } from 'react';
import { Avatar, Flex, Layout } from 'antd';
import { ENOTIFICATION_TYPE, EPATH } from '../../models/models';
import { Link } from 'react-router-dom';
import { StarOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, userSelector } from '../../store/slices/user.slice';
import { imgUrl } from '../../utils/api/consts';
import { me } from '../../utils/api/auth';
import { setNotificationInfo } from '../../store/slices/notification.slice';

export const Header: FC = () => {
	const { id, avatar } = useSelector(userSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!id)
			me()
				.then(result => {
					dispatch(setUserData({ ...result }));
				})
				.catch(errorReason => {
					dispatch(
						setNotificationInfo({
							text: errorReason,
							type: ENOTIFICATION_TYPE.ERROR,
						}),
					);
				});
	}, []);

	return (
		<Layout.Header>
			<Flex justify="space-between">
				<Flex gap="middle" color="white">
					<Link to={EPATH.MAIN}>Играть</Link>
					<Link to={EPATH.LEADER_BOARD}>
						<StarOutlined />
					</Link>
				</Flex>
				<Link to={EPATH.PROFILE}>
					<Avatar src={`${imgUrl}${avatar}`} size="middle" icon={<UserOutlined />} />
				</Link>
			</Flex>
		</Layout.Header>
	);
};
