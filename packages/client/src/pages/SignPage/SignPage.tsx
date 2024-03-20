import { Flex, Typography } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SIGN_PAGE_CONFIG } from './сonstants/SignPageConfig';
import { TSignPageType } from './models/models';
import { Form } from '../../components/Form/Form';

interface IProps {
	type: TSignPageType;
}

export const SignPage: FC<IProps> = ({ type }) => {
	const CONFIG = SIGN_PAGE_CONFIG[type];

	return (
		<Flex vertical align="center" justify="center">
			<Typography.Title level={1}>{CONFIG.title}</Typography.Title>
			<Form type={type} />
			<Link to={CONFIG.linkTo}>
				<Typography.Link>{CONFIG.textLink}</Typography.Link>
			</Link>
		</Flex>
	);
};
