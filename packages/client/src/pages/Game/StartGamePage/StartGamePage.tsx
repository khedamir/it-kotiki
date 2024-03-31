import React, { FC, useEffect, useMemo, useState } from 'react';
import { Button, Flex } from 'antd';
import { Countdown, HintCard, HintCardWrapper, StartGameTitle } from './StartGamePage.style';

const CARD_HINT = [
	{
		id: 1,
		text: 'Здесь будет краткое описание механик чуть позже',
	},
	{
		id: 2,
		text: 'Здесь будет краткое описание механик чуть позже',
	},
];

interface StartGamePageProps {
	gameStarted: boolean;
	startGame: () => void;
}

export const StartGamePage: FC<StartGamePageProps> = ({ gameStarted, startGame }) => {
	const TIME_REMAIN = Date.now() + 1.5 * 60000;
	const [isDisabled, setIsDisabled] = useState(true);

	useEffect(() => {
		setIsDisabled(true);
	}, [gameStarted]);

	const $countDown = useMemo(() => {
		return <Countdown format="mm:ss" value={TIME_REMAIN} onFinish={() => setIsDisabled(false)} />;
	}, []);

	return (
		<Flex vertical align="center" justify="center">
			<StartGameTitle>ИГРА НАЧНЕТСЯ ЧЕРЕЗ:</StartGameTitle>
			{$countDown}
			<HintCardWrapper>
				{CARD_HINT.map(({ id, text }) => (
					<HintCard key={id} title={`Подсказка #${id}`}>
						{text}
					</HintCard>
				))}
			</HintCardWrapper>
			<Button
				disabled={isDisabled}
				size="large"
				onClick={startGame}
				style={{
					width: 200,
				}}>
				СТАРТ
			</Button>
		</Flex>
	);
};
