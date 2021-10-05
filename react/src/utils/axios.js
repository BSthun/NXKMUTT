import instance from 'axios';

const getBaseURL = () => {
	return (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
		? 'http://localhost:1337'
		: 'https://dp-nskmutt-strapi.bsthun.com';
};

const axios = instance.create({
	baseURL: getBaseURL(),
	withCredentials: true,
});

axios.baseURL = getBaseURL();

export default axios;