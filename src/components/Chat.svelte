<script>
	import ChatInput from './ChatInput.svelte';
	import Message from './Message.svelte';
</script>

<div class="live-chat">
	<div class="live-chat__wrapper">
		<div class="live-chat__header">Live Chat</div>
		<div class="live-chat__body">
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
		@apply max-h-[80vh] col-start-9 col-span-4 bg-surface-500 rounded-xl border border-surface-500;

		&__wrapper {
			@apply flex flex-col h-full;
		}

		&__header {
			@apply px-6 py-2;
		}

		&__body {
			@apply bg-surface-700 flex-1 overflow-auto;
		}
	}
</style>
