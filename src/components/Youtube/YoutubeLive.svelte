<script>
	import Chat from './Chat/Chat.svelte';
	import Media from './Frame/Media.svelte';
</script>

<section id="scrollTest">
	<div class="live-container flex-col lg:flex-row" id="scrollMedia">
		<Media />
		<Chat />
	</div>
</section>

<style lang="postcss">
	#scrollTest {
		perspective: 300px;
		perspective-origin: 25% 25%;
		transform-style: preserve-3d;
	}
	.live-container {
		@apply flex gap-4;
	}
</style>
