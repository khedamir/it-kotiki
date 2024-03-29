import { cleanup, render } from '@testing-library/react';
import { ForumPage } from './ForumPage';
import { BrowserRouter } from 'react-router-dom';
import { mockForumTopicsData } from './ForumPage';

describe('Testing Forum page', () => {
	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation(query => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(),
				removeListener: jest.fn(),
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});
	afterEach(cleanup);

	it('renders Forum page content', () => {
		const { container } = render(
			<BrowserRouter>
				<ForumPage />
			</BrowserRouter>,
		);

		expect(container.textContent).toMatch('Форумы');
		mockForumTopicsData.forEach(topic => {
			expect(container.textContent).toMatch(topic.topicTitle);
			expect(container.textContent).toMatch(String(topic.responsesNumber));
		});
	});
});
