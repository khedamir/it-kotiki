import { configureStore } from '@reduxjs/toolkit';
import { notificationSlice } from './slices/notification.slice';
import { userSlice } from './slices/user.slice';

export const store = configureStore({
	reducer: {
		[notificationSlice.name]: notificationSlice.reducer,
		[userSlice.name]: userSlice.reducer,
	},
	devTools: true,
});
