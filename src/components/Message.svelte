<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="live-chat__message">
	<Avatar class="live-chat__avatar" initials="JD" width="w-7" />
	<div class="live-chat__content">
		<span class="live-chat__time">00:00 PM</span>
		<span class="live-chat__author">Author</span>
		<span class="live-chat__text"
			>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
			industries for previewing layouts and visual mockups.</span
		>
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
