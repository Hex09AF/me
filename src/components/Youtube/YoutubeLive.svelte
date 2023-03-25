<script lang="ts">
	import Chat from './Chat/Chat.svelte';
	import Media from './Frame/Media.svelte';

	let h: number;
</script>

<section id="about" class="pt-[80px] h-screen">
	<div class="live-container flex-col lg:flex-row max-h-full">
		<div bind:clientHeight={h} class="lg:flex-[2.9]">
			<Media />
		</div>
		<div style="height: {h}px" class="flex rounded-xl lg:flex-1 overflow-hidden w-full">
			<Chat />
		</div>
	</div>
</section>

<style lang="postcss">
	.live-container {
		@apply flex gap-4;
	}
</style>
