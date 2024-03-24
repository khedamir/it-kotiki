import { Route, Routes } from 'react-router';
import { Layout } from '../Layout/Layout';
import { Template } from '../Template/Template';
import { Stub } from '../Stub/Stub';
import { EPAGE_TYPE, EPATH } from '../../models/models';
import { SignPage } from '../../pages/SignPage/SignPage';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { ESTUB_TYPE } from '../Stub/models/models';

function App() {
	return (
		<Routes>
			<Route path={EPATH.MAIN} element={<Layout />}>
				<Route element={<ProtectedRoute />}>
					<Route index element={<Template />} />
					<Route path={EPATH.PROFILE} element={<ProfilePage />} />
					<Route path={EPATH.LEADER_BOARD} element={<Template />} />
					<Route path={EPATH.FORUM} element={<Template />} />
				</Route>
				<Route path={EPATH.ABOUT} element={<Template />} />
				<Route path={EPATH.SIGN_UP} element={<SignPage type={EPAGE_TYPE.SIGNUP} />} />
				<Route path={EPATH.SIGN_IN} element={<SignPage type={EPAGE_TYPE.SIGNIN} />} />
			</Route>
			<Route path="/*" element={<Stub type={ESTUB_TYPE.INTERNAL_SERVICE_ERROR} />} />
		</Routes>
	);
}

export default App;
