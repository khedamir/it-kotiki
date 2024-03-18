import { useEffect } from 'react';

import { Button, ConfigProvider, Input } from 'antd';
import { ANTD_CONFIG } from './constants/antd.config';
import { Typography } from 'antd';

const { Text, Link } = Typography;

function App() {
	useEffect(() => {
		const fetchServerData = async () => {
			// eslint-disable-next-line no-undef
			const url = `http://localhost:${__SERVER_PORT__}`;
			const response = await fetch(url);
			const data = await response.json();
			// eslint-disable-next-line no-console
			console.log(data);
		};

		fetchServerData();
	}, []);
	return (
		<ConfigProvider theme={ANTD_CONFIG}>
			<div className="App">
				<Text>Вот тут будет жить ваше приложение :)</Text>
				<Button>Button Title</Button>
				<Link> Link Example </Link>
				<Input></Input>
			</div>
		</ConfigProvider>
	);
}

export default App;
