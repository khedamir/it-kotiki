import { Button, Form as AForm, Input } from 'antd';
import { EFIELD_TYPE } from './models/models';
import { EPAGE_TYPE } from '../../models/models';
import { FIELD_CONFIG, FORM_CONFIG } from './constants/FormConfig';
import { FC, Fragment } from 'react';

interface IProps {
	type: EPAGE_TYPE;
}

export const Form: FC<IProps> = ({ type }) => {
	const CONFIG = FORM_CONFIG[type];

	return (
		<AForm>
			{CONFIG.fields.map(fieldType => {
				const { name, required, message, placeholder, type, prefix = null } = FIELD_CONFIG[fieldType];

				return (
					<Fragment key={name}>
						<AForm.Item<Record<EFIELD_TYPE, string>> name={name} rules={[
							{ required,
								message },
						]}>
							{name === EFIELD_TYPE.PASSWORD ? (
								<Input.Password prefix={prefix} placeholder={placeholder} />
							) : (
								<Input prefix={prefix} type={type} placeholder={placeholder} />
							)}
						</AForm.Item>
					</Fragment>
				);
			})}
			<AForm.Item style={{ textAlign: 'center' }}>
				<Button type="primary" htmlType="submit">
					{CONFIG.submitBtnText}
				</Button>
			</AForm.Item>
		</AForm>
	);
};
