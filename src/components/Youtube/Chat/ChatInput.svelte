<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	let input = '';

	$: haveContent = !!input;
</script>

<div class="live-chat__message">
	<Avatar
		class="live-chat__avatar shrink-0 mr-4"
		initials="JD"
		width="w-7"
		background="bg-stone-200 dark:bg-surface-400"
	/>
	<div class="live-chat__input-container">
		<div class="live-chat__author">Author</div>
		<div class="live-chat__input-wrapper">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div
				bind:textContent={input}
				class="live-chat__input"
				contenteditable
				tabindex="0"
				aria-label="Say something... (slow mode is on)"
			/>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class:hidden={haveContent} class="text-xs live-chat__label whitespace-nowrap"
				>Say something... (slow mode is on)</label
			>
			<div id="underline">
				<div id="unfocused" />
				<div id="focused" />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.live-chat {
		&__message {
			@apply flex items-start py-4 px-6;
		}
		&__input-container {
			@apply self-center;
			flex: 1;
			flex-basis: 1e-9px;
			min-width: 0;
		}
		&__input-wrapper {
			@apply relative my-1;
		}
		&__author {
			@apply mr-2 text-xs opacity-70 font-medium;
		}
		&__input {
			@apply outline-none relative z-10 text-sm leading-4;
		}
		&__label {
			@apply absolute inset-0 opacity-70;
		}
	}
</style>
