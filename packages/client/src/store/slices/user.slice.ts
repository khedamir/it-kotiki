import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserDTO = {
	id: number;
	login: string;
	first_name: string;
	second_name: string;
	display_name: string;
	avatar: string;
	phone: string;
	email: string;
};

type UserState = {
	data: UserDTO;
};

const initialState: UserState = {
	data: {
		id: 0,
		login: '',
		first_name: '',
		second_name: '',
		display_name: '',
		avatar: '',
		phone: '',
		email: '',
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	selectors: {
		userSelector: state => state.data,
	},
	reducers: (create): any => ({
		setUserData: create.reducer((state: UserState, { payload }: PayloadAction<UserDTO>) => {
			state.data = payload;
		}),
		clearUserData: create.reducer((state: UserState) => {
			state.data = initialState.data;
		}),
		setUserAvatar: create.reducer((state: UserState, { payload }: PayloadAction<Pick<UserDTO, 'avatar'>>) => {
			state.data.avatar = payload.avatar;
		}),
	}),
});

export const { setUserData, clearUserData, setUserAvatar } = userSlice.actions;
export const { userSelector } = userSlice.selectors;
