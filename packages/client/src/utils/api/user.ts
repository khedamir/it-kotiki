import { userUrl } from './consts';
import { IPasswordFormBody, ISignupFormBody } from '../../components/Form/models/models';
import axios from 'axios';

export const profile = (body: Omit<ISignupFormBody, 'password'>) => {
	return axios
		.put(`${userUrl}/profile`, body, {
			withCredentials: true,
			'Content-Type': 'application/json',
		})
		.then(res => res.data)
		.catch(err => Promise.reject(err.response.data.reason));
};

export const profileAvatar = (file: File) => {
	const data = new FormData();
	data.append('avatar', file);
	return axios
		.put(`${userUrl}/profile/avatar`, data, {
			withCredentials: true,
			'Content-Type': 'multipart/form-data',
		})
		.then(res => res.data)
		.catch(err => Promise.reject(err.response.data.reason));
};

export const profilePassword = (body: IPasswordFormBody) => {
	return axios
		.put(`${userUrl}/password`, body, {
			withCredentials: true,
			'Content-Type': 'application/json',
		})
		.then(res => res.data)
		.catch(err => Promise.reject(err.response.data.reason));
};

export interface IUpdateProfileProps {
	profileData: Omit<ISignupFormBody, 'password'>;
	avatar?: File;
	passwordData: IPasswordFormBody;
}

export const updateProfile = async ({ profileData, avatar, passwordData }: IUpdateProfileProps) => {
	const profilePromise = profile(profileData);
	const passwordPromise = passwordData.newPassword ? profilePassword(passwordData) : Promise.resolve();
	const avatarPromise = avatar ? profileAvatar(avatar) : Promise.resolve();

	return Promise.all([profilePromise, avatarPromise, passwordPromise])
		.then(([profileResponse, avatarResponse, passwordResponse]) => {
			return {
				profile: profileResponse,
				avatar: avatarResponse,
				password: passwordResponse,
			};
		})
		.catch(err => Promise.reject(err));
};
