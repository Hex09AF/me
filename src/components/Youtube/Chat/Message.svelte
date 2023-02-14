<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	export let author = 'Author';
	export let message =
		'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
	export let time = '00:00 PM';
</script>

<div class="live-chat__message">
	<Avatar class="live-chat__avatar" initials={author} width="w-7" />
	<div class="live-chat__content">
		<span class="live-chat__time">{time}</span>
		<span class="live-chat__author">{author}</span>
		<span class="live-chat__text">
			{message}
		</span>
	</div>
</div>

<style lang="postcss">
	:global(.live-chat__avatar) {
		@apply shrink-0 mr-4;
	}
	.live-chat {
		&__message {
			@apply flex items-start pt-2 pb-1 px-6;
		}
		&__content {
			@apply self-center leading-4;
		}
		&__time {
			@apply inline mr-2 text-xs opacity-40;
		}
		&__author {
			@apply inline-flex mr-2 text-xs opacity-70 font-medium;
		}
		&__text {
			@apply break-words text-sm leading-4;
		}
	}
</style>
