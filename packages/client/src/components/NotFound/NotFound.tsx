import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => (
	<div>
		<img alt="здесь забавная картинка" />
		<p>Упс.. кажется вы потревожили котиков</p>
		<p>404</p>
		<Link to="/">Вернуться к игре</Link>
	</div>
);
