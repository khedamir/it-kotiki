import { FC } from 'react';
import { Avatar, Layout } from 'antd';
import { EPATH } from '../../models/models';
import { Link } from 'react-router-dom';
import { StarOutlined, UserOutlined } from '@ant-design/icons';

export const Header: FC = () => {
	return (
		<Layout.Header>
			<Link to={EPATH.PROFILE}>
				<Avatar size="small" icon={<UserOutlined />} />
			</Link>
			<Link to={EPATH.LEADER_BOARD}>
				<Avatar size="small" icon={<StarOutlined />} />
			</Link>
		</Layout.Header>
	);
};
