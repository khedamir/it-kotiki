import { objectSorter } from './helpers';

describe('Testing helpers functions', () => {
	describe('Testing objectsSorter function', () => {
		const data = [
			{
				avatarPath: '',
				id: 1,
				playerName: 'Игрок 1',
				scoreToday: 18,
				scoreTotal: 143,
				userPosition: 1,
			},
			{
				avatarPath: '',
				id: 2,
				playerName: 'Игрок 2',
				scoreToday: 4,
				scoreTotal: 114,
				userPosition: 2,
			},
			{
				avatarPath: '',
				id: 3,
				playerName: 'Игрок 3',
				scoreToday: 15,
				scoreTotal: 165,
				userPosition: 3,
			},
		];
		it('returns passed array if no sorting key provided', () => {
			const result = objectSorter(data);
			expect(JSON.stringify(result)).toBe(JSON.stringify(data));
		});
		it('returns array, sorted by key in ascending order if order parameter is not provided', () => {
			const key = 'scoreToday';
			const expected = [
				{
					avatarPath: '',
					id: 2,
					playerName: 'Игрок 2',
					scoreToday: 4,
					scoreTotal: 114,
					userPosition: 2,
				},
				{
					avatarPath: '',
					id: 3,
					playerName: 'Игрок 3',
					scoreToday: 15,
					scoreTotal: 165,
					userPosition: 3,
				},
				{
					avatarPath: '',
					id: 1,
					playerName: 'Игрок 1',
					scoreToday: 18,
					scoreTotal: 143,
					userPosition: 1,
				},
			];
			const result = objectSorter(data, key);
			expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
		});
		it('returns array, sorted by key in descending order if order parameter is provided', () => {
			const key = 'scoreToday';
			const descOrder = true;
			const expected = [
				{
					avatarPath: '',
					id: 1,
					playerName: 'Игрок 1',
					scoreToday: 18,
					scoreTotal: 143,
					userPosition: 1,
				},
				{
					avatarPath: '',
					id: 3,
					playerName: 'Игрок 3',
					scoreToday: 15,
					scoreTotal: 165,
					userPosition: 3,
				},
				{
					avatarPath: '',
					id: 2,
					playerName: 'Игрок 2',
					scoreToday: 4,
					scoreTotal: 114,
					userPosition: 2,
				},
			];
			const result = objectSorter(data, key, descOrder);
			expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
		});
	});
});
