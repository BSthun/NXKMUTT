import instance, { AxiosInstance } from 'axios'

// Strapi Instance
export const strapiAxios: AxiosInstance & { baseURL?: string } = instance.create({
	baseURL: 'https://nx.kmutt.ac.th/strapi',
	withCredentials: true,
})

strapiAxios.baseURL = 'https://nx.kmutt.ac.th/strapi'

// Backend Instance
export const backendAxios: AxiosInstance & { baseURL?: string } = instance.create({
	baseURL: 'https://nx.kmutt.ac.th/backend',
	withCredentials: true,
})

backendAxios.baseURL = 'https://nx.kmutt.ac.th/backend'
