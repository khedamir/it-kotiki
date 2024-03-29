import { map } from './collision-map';
import { findPath } from './findPath';
import { ArrayToObject } from './findPath';

const pathStart = [4, 22];
const pathEnd = [7, 3];
const expected = [
	{
		x: 1440,
		y: 288,
	},
	{
		x: 1376,
		y: 288,
	},
	{
		x: 1312,
		y: 288,
	},
	{
		x: 1248,
		y: 288,
	},
	{
		x: 1184,
		y: 288,
	},
	{
		x: 1120,
		y: 288,
	},
	{
		x: 1056,
		y: 288,
	},
	{
		x: 992,
		y: 288,
	},
	{
		x: 928,
		y: 288,
	},
	{
		x: 864,
		y: 288,
	},
	{
		x: 800,
		y: 288,
	},
	{
		x: 736,
		y: 288,
	},
	{
		x: 672,
		y: 288,
	},
	{
		x: 608,
		y: 352,
	},
	{
		x: 544,
		y: 352,
	},
	{
		x: 480,
		y: 352,
	},
	{
		x: 416,
		y: 352,
	},
	{
		x: 352,
		y: 352,
	},
	{
		x: 288,
		y: 416,
	},
	{
		x: 224,
		y: 416,
	},
	{
		x: 192,
		y: 448,
	},
];
const array = [
	[4, 22],
	[4, 21],
	[4, 20],
	[4, 19],
	[4, 18],
	[4, 17],
	[4, 16],
	[4, 15],
	[4, 14],
	[4, 13],
	[4, 12],
	[4, 11],
	[4, 10],
	[5, 9],
	[5, 8],
	[5, 7],
	[5, 6],
	[5, 5],
	[6, 4],
	[6, 3],
	[7, 3],
];

describe('Testing findPath function', () => {
	it('returns path object', () => {
		const path = findPath(map, pathStart, pathEnd);
		expect(JSON.stringify(path)).toBe(JSON.stringify(expected));
	});
});

describe('Testing ArrayToObject function', () => {
	it('returns path object', () => {
		const object = ArrayToObject(array);
		expect(JSON.stringify(object)).toBe(JSON.stringify(expected));
	});
});
