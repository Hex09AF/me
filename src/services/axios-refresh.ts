// // -----------------------------------------------------------------------------
// // This file contains an instance of axios with a custom config (axiosClient)
// // and an axiosFetch singleton to make http requests (axiosFetch)
// // -----------------------------------------------------------------------------
// import axios from 'axios';
// import CookieUtil, { COOKIE } from '../cookie';
// import { API as AUTH_API_CONST } from '../../services/api/authencations';
// import ENV_CONST from '../../config/env';
// /**
//  * Create a new instance of axios with a custom config
//  * you need to set(STORAGE.JWT)
//  */
// const axiosClient = axios.create({
// 	baseURL: ENV_CONST.apiGateway
// });
// axiosClient.interceptors.request.use(
// 	function (config) {
// 		const token = CookieUtil.get(COOKIE.JWT);
// 		if (typeof token !== 'undefined') {
// 			config.headers['Authorization'] = 'Bearer ' + token;
// 		}
// 		return config;
// 	},
// 	function (error) {
// 		return Promise.reject(error);
// 	}
// );
// // for multiple requests
// let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error, token = null) => {
// 	failedQueue.forEach((prom) => {
// 		if (error) {
// 			prom.reject(error);
// 		} else {
// 			prom.resolve(token);
// 		}
// 	});

// 	failedQueue = [];
// };

// const revokeCookieWhenAllFailed = () => {
// 	try {
// 		CookieUtil.remove(COOKIE.JWT);
// 		CookieUtil.remove(COOKIE.REFRESH_JWT);
// 	} catch (error) {
// 		console.error({ error });
// 	}
// };

// axiosClient.interceptors.response.use(
// 	function (response) {
// 		return response;
// 	},
// 	function (error) {
// 		const originalRequest = error.config;

// 		const refresh_token = CookieUtil.get(COOKIE.REFRESH_JWT);
// 		const access_token = CookieUtil.get(COOKIE.JWT);

// 		const isCaseRefreshToken =
// 			error.response.status === 401 && !originalRequest._retry && !!access_token;
// 		if (!isCaseRefreshToken) return Promise.reject(error);

// 		if (isRefreshing) {
// 			return new Promise(function (resolve, reject) {
// 				failedQueue.push({ resolve, reject });
// 			})
// 				.then(() => {
// 					return axiosClient(originalRequest);
// 				})
// 				.catch((err) => {
// 					return Promise.reject(err);
// 				});
// 		}

// 		originalRequest._retry = true;
// 		isRefreshing = true;

// 		return new Promise(function (resolve, reject) {
// 			axiosClient
// 				.post(AUTH_API_CONST.REFRESH_TOKEN, { refresh_token })
// 				.then(({ data }) => {
// 					CookieUtil.set(COOKIE.JWT, data.data.token);
// 					CookieUtil.set(COOKIE.REFRESH_JWT, data.data.refresh_token);
// 					processQueue(null, data.data.token);
// 					resolve(axiosClient(originalRequest));
// 				})
// 				.catch((err) => {
// 					revokeCookieWhenAllFailed();
// 					processQueue(err, null);
// 					reject(err);
// 				})
// 				.finally(() => {
// 					isRefreshing = false;
// 				});
// 		});
// 	}
// );

// /**
//  * Create a singleton
//  */
// export class AxiosModel {
// 	constructor(lib) {
// 		this.lib = lib;
// 	}

// 	get(uri, params = {}, headers = {}) {
// 		return this.lib.get(uri, { params, headers });
// 	}
// 	post(uri, body = {}) {
// 		return this.lib.post(uri, body);
// 	}
// 	put(uri, body = {}) {
// 		return this.lib.put(uri, body);
// 	}
// 	delete(uri, body = {}) {
// 		return this.lib.delete(uri, { data: body });
// 	}
// 	patch(uri, body = {}) {
// 		return this.lib.patch(uri, body);
// 	}
// 	download(uri, params = {}) {
// 		return this.lib.get(uri, { params, responseType: 'blob' });
// 	}
// }

// const axiosFetch = new AxiosModel(axiosClient);
// export default axiosFetch;
