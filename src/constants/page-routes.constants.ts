export const route = {
    home: '/',
    placeholder: '#',
    article: (id: number) => `/article/${id}`,
} as const;
