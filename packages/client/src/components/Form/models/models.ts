import { ReactNode } from 'react';

export enum EFIELD_TYPE {
	LOGIN = 'login',
	PASSWORD = 'password',
	NAME = 'name',
	SURNAME = 'surname',
	EMAIL = 'email',
	PHONE = 'phone',
}

export interface IFormConfig {
	submitBtnText: string;
	fields: EFIELD_TYPE[];
}

export interface IFieldConfig {
	label: string;
	name: EFIELD_TYPE;
	type: any;
	required: boolean;
	pattern: string;
	placeholder: string;
	message?: string;
	prefix?: ReactNode;
}
