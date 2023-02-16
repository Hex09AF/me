import axios from 'axios';
import { ENV } from '../declares/env';
import { LSKey } from '../declares/interfaces/local-storage';
import { LSService } from '../utils/local-storage';

const axiosClient = axios.create({
	baseURL: `${ENV.API_URL}`,
	headers: {
		'Content-Type': 'application/json; charset=utf-8'
	}
});

axiosClient.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axiosClient.interceptors.request.use(function (config) {
	const token = LSService.getInstance().getKey(LSKey.AccessToken);
	if (token && config && config.headers) {
		config.headers.Authorization = token;
	}
	return config;
});

export default axiosClient;
