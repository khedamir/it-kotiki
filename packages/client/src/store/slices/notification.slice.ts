import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ENOTIFICATION_TYPE } from '../../models/models';

interface INData {
	type: ENOTIFICATION_TYPE | null;
	text: string;
}

interface INState {
	isOpen: boolean;
	data: INData;
}

const initialState = {
	isOpen: false,
	data: {
		type: null,
		text: '',
	},
};

export const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	selectors: {
		notificationSelector: state => state,
	},
	reducers: (create): any => ({
		setNotificationInfo: create.reducer((state: INState, { payload }: PayloadAction<INData>) => {
			state.data = payload;
			state.isOpen = true;
		}),
		clearNotificationInfo: create.reducer((state: INState) => {
			state.data = initialState.data;
			state.isOpen = false;
		}),
	}),
});

export const { setNotificationInfo, clearNotificationInfo } = notificationSlice.actions;
export const { notificationSelector } = notificationSlice.selectors;
