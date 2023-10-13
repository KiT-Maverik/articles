const base = 'http://localhost:3001';

export const api = {
	article: {
		list: `${base}/articles`,
		byId: (id: string) => `${base}/articles/${id}`,
	},
	comment: {
		list: `${base}/comments`,
		byId: (id: string) => `${base}/comments/${id}`,
	},
} as const;
