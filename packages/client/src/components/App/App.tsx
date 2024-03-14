import { Route, Routes } from 'react-router';
import { Layout } from '../Layout/Layout';
import { Template } from '../Template/Template';
import { NotFound } from '../NotFound/NotFound';
import { EPath } from '../../models/models';

function App() {
	return (
		<Routes>
			<Route path={EPath.main} element={<Layout />}>
				<Route index element={<Template />} />
				<Route path={EPath.signIn} element={<Template />} />
				<Route path={EPath.signUp} element={<Template />} />
				<Route path={EPath.profile} element={<Template />} />
				<Route path={EPath.about} element={<Template />} />
				<Route path={EPath.leaderBoard} element={<Template />} />
				<Route path={EPath.forum} element={<Template />} />
				<Route path="/*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
