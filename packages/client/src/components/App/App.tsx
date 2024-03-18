import { Route, Routes } from 'react-router';
import { Layout } from '../Layout/Layout';
import { Template } from '../Template/Template';
import { NotFound } from '../NotFound/NotFound';
import { EPATH } from '../../models/models';

function App() {
	return (
		<Routes>
			<Route path={EPATH.MAIN} element={<Layout />}>
				<Route index element={<Template />} />
				<Route path={EPATH.SIGN_IN} element={<Template />} />
				<Route path={EPATH.SIGN_UP} element={<Template />} />
				<Route path={EPATH.PROFILE} element={<Template />} />
				<Route path={EPATH.ABOUT} element={<Template />} />
				<Route path={EPATH.LEADER_BOARD} element={<Template />} />
				<Route path={EPATH.FORUM} element={<Template />} />
				<Route path="/*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
