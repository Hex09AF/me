<script lang="ts">
	import { Avatar, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';
	import { writable } from 'svelte/store';
	import LottieLike from './LottieLike/LottieLike.svelte';
	// import Nyan from './Nyan/Nyan.svelte';

	const storeLayout: Writable<string> = writable('horz');
</script>

<div class="live-media">
	<div class="live-media__container">
		<div class="live-media__content w-full h-full relative">
			<!-- <Nyan /> -->
			<iframe
				title="anime mode"
				src="https://giphy.com/embed/3Fn9rVGma1WiqycMoO"
				width="100%"
				height="100%"
				frameBorder="0"
				class="giphy-embed"
				allowFullScreen
			/>
		</div>
	</div>
	<div class="live-media__metadata mt-4">
		<h4 class="live-media__title">lofi hip hop radio - beats to relax/study to</h4>
		<div class="live-media__owner-info flex justify-between items-center mt-3">
			<div class="live-media__owner flex">
				<Avatar class="mr-3" />
				<div class="mr-6">
					<div>Hex</div>
					<div class="text-xs opacity-60">11.9M subscribers</div>
				</div>
				<div class="mr-3 flex items-center">
					<button class="btn btn-sm variant-filled-surface"> Join </button>
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
				<div class="live-media__advance flex ml-2 items-center">
					<div>
						<button class="btn btn-sm variant-filled-surface"> Clip </button>
					</div>
					<div class="ml-2">
						<button class="btn btn-sm variant-filled-surface"> Save </button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.live-media {
		@apply col-start-1 col-span-8 h-full;

		&__container {
			@apply aspect-video;
			max-width: 100%;
			max-height: 100%;
		}
	}
</style>
