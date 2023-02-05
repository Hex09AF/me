<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { T } from '@threlte/core';
	import { currentScence, SCENCE } from '../store/scence';
	import Credit from './Credit/Credit.svelte';
	import Intro from './Intro/Intro.svelte';
	import LottieLike from './LottieLike/LottieLike.svelte';
	import Toolbar from './Media/Toolbar.svelte';
	import Nyan from './Nyan/Nyan.svelte';
	import Tech from './Tech/Tech.svelte';
</script>

<div class="live-media">
	<div class="live-media__container">
		<div class="live-media__content w-full h-full relative">
			{#if $currentScence === SCENCE.INTRO}
				<Intro />
			{/if}
			{#if $currentScence === SCENCE.TECH}
				<Tech />
			{/if}
			{#if $currentScence === SCENCE.REST}
				<Nyan />
			{/if}
			{#if $currentScence === SCENCE.ANIME}
				<iframe
					title="anime summer wars"
					src="https://giphy.com/embed/3oz8xCoHgi4N5qlLYA"
					width="100%"
					height="100%"
					frameBorder="0"
					allowFullScreen
				/>
			{/if}
			{#if $currentScence === SCENCE.CREDIT}
				<Credit />
			{/if}
		</div>
		<Toolbar />
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
			@apply aspect-video relative;
			max-width: 100%;
			max-height: 100%;
		}
	}
</style>
