export enum EPATH {
	MAIN = '/',
	SIGN_IN = '/sign-in',
	SIGN_UP = '/sign-up',
	PROFILE = '/profile',
	ABOUT = '/about',
	LEADER_BOARD = '/leader-board',
	FORUM = '/forum',
}

export const PROTECTED_ROUTES: ReadonlyArray<EPATH> = [EPATH.MAIN, EPATH.PROFILE, EPATH.FORUM, EPATH.LEADER_BOARD];

export const enum EPAGE_TYPE {
	SIGNIN,
	SIGNUP,
}

export const enum ENOTIFICATION_TYPE {
	ERROR = 'error',
}
