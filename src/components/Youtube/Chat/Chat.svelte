<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { chatMessage } from '../../../store/chat';
	import Message from './Message.svelte';

	onMount(() => {
		chatMessage.getAllMessages();
	});

	let liveChatBody: HTMLDivElement;

	const unsubscribeScrollBottom = chatMessage.subscribe(() => {
		setTimeout(() => {
			if (liveChatBody) liveChatBody.scrollTop = liveChatBody.scrollHeight;
		}, 0);
	});

	onDestroy(unsubscribeScrollBottom);
</script>

<div class="live-chat w-full flex rounded-xl">
	<div
		class="live-chat__wrapper dark:bg-surface-500 border-gray-200 dark:border-surface-500 overflow-hidden"
	>
		<div class="live-chat__header">My random thoughts</div>
		<div
			bind:this={liveChatBody}
			class="live-chat__body bg-stone-50 dark:bg-surface-700 border border-gray-200 dark:border-surface-500 border-x-0 border-b-0 pb-4"
		>
			{#each $chatMessage as message}
				<Message {...message} />
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.live-chat {
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
