<script>
	import ChatInput from './ChatInput.svelte';
	import Message from './Message.svelte';
</script>

<div class="live-chat dark:bg-surface-500">
	<div class="live-chat__wrapper">
		<div class="live-chat__header">Live Chat</div>
		<div class="live-chat__body bg-gray-200	 dark:bg-surface-700">
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
		</div>
		<div class="live-chat__tool">
			<ChatInput />
		</div>
	</div>
</div>

<style lang="postcss">
	.live-chat {
		@apply max-h-[80vh] flex-1  rounded-xl border border-surface-500;

		&__wrapper {
			@apply flex flex-col h-full;
		}

		&__header {
			@apply px-6 py-2;
		}

		&__body {
			@apply flex-1 overflow-auto;
		}
	}
</style>
