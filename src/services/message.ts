// import { ENV } from '../declares/env';
// import configAxios from './axios-config';
import messages from '../store/messages.json';

// const router = {
// 	home: `${ENV.API_URL}/messages`
// };

class MessageService {
	static async getAllMessages() {
		return new Promise((res) => {
			setTimeout(() => {
				res(messages);
			}, 1000);
		});
	}
}

export default MessageService;
