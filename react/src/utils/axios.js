import instance from 'axios';

const getBaseURL = () => {
	return 'https://nxkmutt-strapi.bsthun.com';
};

const axios = instance.create({
	baseURL: getBaseURL(),
	withCredentials: true,
});

axios.baseURL = getBaseURL();

export default axios;