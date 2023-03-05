<script lang="ts">
	import { onMount } from 'svelte';
	import MessageService from '../../../services/message';
	import randBetween from '../../../utils/rand';
	import { chatTimeFormat } from '../../../utils/time';
	import wait from '../../../utils/wait';
	import ChatInput from './ChatInput.svelte';
	import Message from './Message.svelte';

	let messages: any = [];

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
			messages = [...messages, message];
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

	onMount(() => {
		getAllMessages();
	});
</script>

<div class="live-chat lg:flex-1">
	<div class="live-chat__wrapper dark:bg-surface-500 border-gray-200 dark:border-surface-500">
		<div class="live-chat__header">Live Chat</div>
		<div
			class="live-chat__body bg-stone-50  dark:bg-surface-700 border border-gray-200 dark:border-surface-500 border-x-0"
		>
			{#each messages as message}
				<Message {...message} />
			{/each}
		</div>
		<div class="live-chat__tool">
			<ChatInput />
		</div>
	</div>
</div>

<style lang="postcss">
	.live-chat {
		@apply h-[80vh] flex rounded-xl;

		&__wrapper {
			@apply flex flex-col flex-1 rounded-xl border;
		}

		&__header {
			@apply px-6 py-2;
		}

		&__body {
			@apply flex-1 overflow-auto;
		}
	}
</style>
