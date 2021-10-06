import instance from 'axios';

const getBaseURL = () => {
	return (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
		? 'https://dp-nxkmutt-strapi.bsthun.com'
		: 'https://dp-nxkmutt-strapi.bsthun.com';
};

const axios = instance.create({
	baseURL: getBaseURL(),
	withCredentials: true,
});

axios.baseURL = getBaseURL();

export default axios;