import { EPAGE_TYPE } from '../../../models/models';
import { EFIELD_TYPE, IFieldConfig, IFormConfig } from '../models/models';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export const FORM_CONFIG: Record<EPAGE_TYPE, IFormConfig> = {
	[EPAGE_TYPE.SIGNIN]: {
		submitBtnText: 'Войти',
		fields: [EFIELD_TYPE.LOGIN, EFIELD_TYPE.PASSWORD],
	},
	[EPAGE_TYPE.SIGNUP]: {
		submitBtnText: 'Зарегистрироваться',
		fields: [
			EFIELD_TYPE.NAME,
			EFIELD_TYPE.SURNAME,
			EFIELD_TYPE.EMAIL,
			EFIELD_TYPE.PHONE,
			EFIELD_TYPE.LOGIN,
			EFIELD_TYPE.PASSWORD,
		],
	},
};

export const FIELD_CONFIG: Record<EFIELD_TYPE, IFieldConfig> = {
	[EFIELD_TYPE.EMAIL]: {
		label: 'Email',
		name: EFIELD_TYPE.EMAIL,
		type: 'email',
		required: true,
		pattern: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$',
		placeholder: 'Email',
		message: 'Введите email',
	},
	[EFIELD_TYPE.LOGIN]: {
		label: 'Login',
		name: EFIELD_TYPE.LOGIN,
		type: 'text',
		required: true,
		pattern: '(?=.*[a-z]|[A-Z])[a-zA-Z0-9\\-_]{3,20}',
		placeholder: 'Логин',
		message: 'Введите логин',
		prefix: <UserOutlined className="site-form-item-icon" />,
	},
	[EFIELD_TYPE.NAME]: {
		label: 'Name',
		name: EFIELD_TYPE.NAME,
		type: 'text',
		required: true,
		pattern: '^[A-ZА-Я]+[A-Za-zА-Яа-я\\-]*',
		placeholder: 'Имя',
		message: 'Введите имя',
	},
	[EFIELD_TYPE.SURNAME]: {
		label: 'Surname',
		name: EFIELD_TYPE.SURNAME,
		type: 'text',
		required: false,
		pattern: '^[A-ZА-Я]+[A-Za-zА-Яа-я\\-]*',
		placeholder: 'Фамилия',
	},
	[EFIELD_TYPE.PHONE]: {
		label: 'Phone',
		name: EFIELD_TYPE.PHONE,
		type: 'tel',
		required: false,
		pattern: '^[\\+]?[0-9]{10,15}',
		placeholder: 'Телефон',
	},
	[EFIELD_TYPE.PASSWORD]: {
		label: 'Password',
		name: EFIELD_TYPE.PASSWORD,
		type: 'password',
		required: true,
		pattern: '((?=.*\\d)(?=.*[A-Z]).{8,40})',
		placeholder: 'Пароль',
		message: 'Введите пароль',
		prefix: <LockOutlined className="site-form-item-icon" />,
	},
};
