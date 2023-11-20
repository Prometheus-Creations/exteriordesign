/* eslint-disable no-undef */

export default {
	get: jest.fn(() => Promise.resolve({ data: {} })),
	post: jest.fn(() => Promise.resolve({ data: {} })),
	delete: jest.fn(() => Promise.resolve({})),
};
