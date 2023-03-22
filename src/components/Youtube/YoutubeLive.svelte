<script>
	import Chat from './Chat/Chat.svelte';
	import Media from './Frame/Media.svelte';
</script>

<section id="about" class="pt-[80px] h-screen">
	<div class="live-container flex-col lg:flex-row">
		<Media />
		<Chat />
	</div>
</section>

<style lang="postcss">
	.live-container {
		@apply flex gap-4;
	}
</style>
