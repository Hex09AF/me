<script>
	import Chat from './Chat.svelte';
	import Media from './Media.svelte';
</script>

<section>
	<div class="live-container">
		<Media />
		<Chat />
	</div>
</section>

<style lang="postcss">
	.live-container {
		@apply grid grid-cols-12 gap-12 items-stretch;
	}
</style>
