<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { FRAME_INFO } from '../../../store/frame/constant';
	import { frame } from '../../../store/frame/frame';
	import Welcome from '../../Welcome/Welcome.svelte';
	import Credit from './Credit/Credit.svelte';
	import Intro from './Intro/Intro.svelte';
	import LottieLike from './LottieLike/LottieLike.svelte';
	import Nyan from './Nyan/Nyan.svelte';
	import Tech from './Tech/Tech.svelte';
	import Toolbar from './Tool/Toolbar.svelte';
</script>

<div class="live-media lg:flex-[2.4]">
	<div class="live-media__container">
		<div class="live-media__content w-full h-full relative">
			{#if $frame === FRAME_INFO.INTRO.name}
				<div class="relative h-full max-h-full overflow-auto" id="scrollWrapper">
					<Welcome />
					<!-- <Intro /> -->
				</div>
			{/if}
			{#if $frame === FRAME_INFO.LEARNING.name}
				<Tech />
			{/if}
			{#if $frame === FRAME_INFO.REST.name}
				<Nyan />
			{/if}
			{#if $frame === FRAME_INFO.CREDIT.name}
				<Credit />
			{/if}
		</div>
		<Toolbar />
	</div>
	<div class="live-media__metadata mt-4">
		<h4 class="live-media__title">A day in the life of a software engineer</h4>
		<div
			class="live-media__owner-info flex justify-between items-center mt-3 flex-wrap gap-3 font-medium"
		>
			<div class="live-media__owner flex">
				<Avatar class="mr-3 flex-shrink-0" initials="HX" />
				<div class="mr-6">
					<div>Hex</div>
					<div class="text-xs opacity-60 font-normal">19.9M subscribers</div>
				</div>
				<div class="live-media__subscribe flex items-center">
					<button class="btn btn-sm variant-filled-primary"> Subscribe </button>
				</div>
			</div>

			<div class="live-media__actions flex">
				<div class="live-media__basic flex items-center">
					<LottieLike />
					<div class="ml-2">
						<button class="btn btn-sm variant-filled-surface"> Share </button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.live-media {
		@apply h-full;

		&__container {
			@apply aspect-video relative;
			max-width: 100%;
			max-height: 100%;

			&:hover :global(.live-media__toolbar) {
				opacity: 1;
			}
		}
	}
</style>
