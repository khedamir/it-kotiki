import { Button, Form as AForm, Input, Upload } from 'antd';
import { EFIELD_TYPE } from './models/models';
import { EPAGE_TYPE } from '../../models/models';
import { FORM_CONFIG } from './constants/FormConfig';
import { FC, Fragment } from 'react';
import { FIELD_CONFIG } from './constants/FieldConfig';
import { UploadOutlined } from '@ant-design/icons';

interface IProps<T> {
	type: EPAGE_TYPE;
	onSubmit: (any) => Promise<void>;
	initialData?: T;
}

export const Form: FC = <T,>({ type, onSubmit, initialData }: IProps<T>) => {
	const [form] = AForm.useForm();
	const CONFIG = FORM_CONFIG[type];
	const isProfileForm = type === EPAGE_TYPE.PROFILE;

	const PASSWORD_FIELDS = [EFIELD_TYPE.PASSWORD, EFIELD_TYPE.OLD_PASSWORD, EFIELD_TYPE.NEW_PASSWORD];

	const handleSubmit = values => {
		onSubmit(values).then(() => {
			if (isProfileForm) form.setFieldValue('upload', []);
		});
	};

	return (
		<AForm form={form} onFinish={handleSubmit} initialValues={initialData}>
			{CONFIG.fields.map(fieldType => {
				const { name, required, message, placeholder, type, prefix = null } = FIELD_CONFIG[fieldType];
				return (
					<Fragment key={name}>
						<AForm.Item<Record<EFIELD_TYPE, string>>
							name={name}
							rules={[
								{
									required,
									message,
								},
							]}>
							{PASSWORD_FIELDS.includes(name) ? (
								<Input.Password prefix={prefix} placeholder={placeholder} />
							) : (
								<Input prefix={prefix} type={type} placeholder={placeholder} />
							)}
						</AForm.Item>
					</Fragment>
				);
			})}
			{isProfileForm && (
				<AForm.Item name="upload" valuePropName="fileList" getValueFromEvent={e => e.fileList}>
					<Upload listType="picture" maxCount={1} beforeUpload={() => false}>
						<Button icon={<UploadOutlined />}>Загрузить изображение</Button>
					</Upload>
				</AForm.Item>
			)}
			<AForm.Item style={{ textAlign: 'center' }}>
				<Button htmlType="submit">{CONFIG.submitBtnText}</Button>
			</AForm.Item>
		</AForm>
	);
};
