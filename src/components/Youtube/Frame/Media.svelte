<script lang="ts">
	import { Avatar, clipboard } from '@skeletonlabs/skeleton';
	import { FRAME_INFO } from '../../../store/frame/constant';
	import { frame } from '../../../store/frame/frame';
	import { isSubscribe } from '../../../store/frame/subscribe';
	import Welcome from '../../Welcome/Welcome.svelte';
	import Credit from './Credit/Credit.svelte';
	import Intro from './Intro/Intro.svelte';
	import LottieLike from './LottieLike/LottieLike.svelte';
	import Nyan from './Nyan/Nyan.svelte';
	import Tech from './Tech/Tech.svelte';
	import Toolbar from './Tool/Toolbar.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let copyState = false;

	function onCopyClick() {
		if (copyState) return;
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 2000);
		dispatch('copy', {});
	}
</script>

<div class="live-media lg:flex-[2.4]">
	<div class="live-media__container">
		<div class="live-media__content w-full h-full relative">
			{#if $frame === FRAME_INFO.INTRO.name}
				<div
					class="relative h-full max-h-full overflow-y-auto overflow-x-hidden"
					id="scrollWrapper"
				>
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
		<div class="live-media__owner-info flex justify-between items-center mt-3 flex-wrap gap-3">
			<div class="live-media__owner flex">
				<Avatar
					class="mr-3 flex-shrink-0"
					initials="HX"
					background="bg-amber-100"
					fill="fill-green-700"
				/>
				<div class="mr-6">
					<div>Hex</div>
					<div class="text-xs opacity-60 font-normal">19.9M subscribers</div>
				</div>
				<div class="live-media__subscribe flex items-center">
					<button
						class="btn btn-sm variant-filled-surface h-[36px]"
						on:click={isSubscribe.subscribed}
					>
						{$isSubscribe ? 'Subscribed' : 'Subscribe'}
					</button>
				</div>
			</div>

			<div class="live-media__actions flex">
				<div class="live-media__basic flex items-center">
					<LottieLike />
					<div class="ml-2">
						<button
							class="btn btn-sm variant-filled-surface h-[36px]"
							on:click={onCopyClick}
							use:clipboard={'http://localhost:5173'}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								class="w-4 mr-2 fill-white"
							>
								<path
									d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H304v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16h64V160H64z"
								/>
							</svg>
							{copyState ? '👍🎉🥰' : 'Share link'}
						</button>
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
