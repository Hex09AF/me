<script lang="ts">
	import { FRAME_INFO } from '../../../store/frame/constant';
	import { frame } from '../../../store/frame/frame';
	import Welcome from '../../Welcome/Welcome.svelte';
	import Credit from './Credit/Credit.svelte';
	import Intro from './Intro/Intro.svelte';
	import LottieLike from './LottieLike/LottieLike.svelte';
	import Tech from './Tech/Tech.svelte';
	import Toolbar from './Tool/Toolbar.svelte';
</script>

<div class="live-media">
	<div class="live-media__container">
		<div class="live-media__content w-full h-full relative">
			{#if $frame === FRAME_INFO.INTRO.name}
				<div
					class="relative h-full max-h-full overflow-y-auto overflow-x-hidden"
					id="scrollWrapper"
				>
					<Welcome />
				</div>
			{/if}
			{#if $frame === FRAME_INFO.ABOUT.name}
				<Intro />
			{/if}
			{#if $frame === FRAME_INFO.LEARNING.name}
				<Tech />
			{/if}
			{#if $frame === FRAME_INFO.CREDIT.name}
				<Credit />
			{/if}
		</div>
		<Toolbar />
	</div>
	<div class="live-media__metadata mt-4">
		<div class="live-media__owner-info flex justify-between items-center mt-3 flex-wrap gap-3">
			<div class="live-media__owner flex">
				<h4 class="live-media__title">About me</h4>
			</div>

			<div class="live-media__actions flex">
				<div class="live-media__basic flex items-center">
					<LottieLike />
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.live-media {
		@apply h-full;

		&__container {
			@apply aspect-[16/10] relative;
			max-width: 100%;
			max-height: 100%;

			&:hover :global(.live-media__toolbar) {
				opacity: 1;
			}
		}
	}
</style>
