import { writable } from 'svelte/store';
import MessageService from '../../services/message';
import randBetween from '../../utils/rand';
import { chatTimeFormat } from '../../utils/time';
import wait from '../../utils/wait';

interface Message {
	author: string;
	message: string;
	time: string;
}

function createChatMessage() {
	const { subscribe, set, update } = writable<Message[]>([]);

	async function chat(mess: any) {
		const authors = Object.keys(mess);
		for (let i = 0; i < authors.length; ++i) {
			const message = {
				author: authors[i],
				message: mess[authors[i]],
				time: chatTimeFormat()
			};
			if (i) {
				const waitTime = randBetween(1, 3) * 1000;
				await wait(waitTime);
			}
			update((messages) => [...messages, message]);
		}
	}

	async function autoChat(groupMessage: any) {
		for (let i = 0; i < groupMessage.length; ++i) {
			if (i) {
				const waitTime = randBetween(5, 10) * 1000;
				await wait(waitTime);
			}
			await chat(groupMessage[i]);
		}
	}

	async function getAllMessages() {
		const groupMessage: any = await MessageService.getAllMessages();
		autoChat(groupMessage);
	}

	return {
		subscribe,
		set,
		update,
		autoChat,
		getAllMessages,
		nicePoint: () => {
			update((messages) => [
				...messages,
				{
					author: '🥳',
					message: 'Nice',
					time: chatTimeFormat()
				}
			]);
		}
	};
}

export const chatMessage = createChatMessage();
