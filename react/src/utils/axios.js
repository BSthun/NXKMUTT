import instance from 'axios';

// Strapi Instance
export const strapiAxios = instance.create({
	baseURL: 'https://nxkmutt-strapi.bsthun.com',
	withCredentials: true,
});

strapiAxios.baseURL = 'https://nxkmutt-strapi.bsthun.com';

// Backend Instance
export const backendAxios = instance.create({
	baseURL: 'https://nxkmutt-backend.bsthun.com',
	withCredentials: true,
});

backendAxios.baseURL = 'https://nxkmutt-backend.bsthun.com';

export default { strapiAxios, backendAxios };