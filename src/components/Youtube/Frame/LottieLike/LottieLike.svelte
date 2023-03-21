<script lang="ts">
	import { clipboard } from '@skeletonlabs/skeleton';
	import { createEventDispatcher } from 'svelte';
	import lottieLikeBtn from '../../../../assets/lottie/like-btn.json';

	const getLottie = async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		return module.LottiePlayer;
	};

	const promise = getLottie();

	let player: any;
	let isStarted = false;
	const onClick = () => {
		if (player) {
			if (isStarted) {
				player.stop();
			} else {
				player.play();
			}
			isStarted = !isStarted;
		}
	};

	let isDislike: boolean;

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

{#await promise then LottiePlayer}
	<div class="overflow-visible flex">
		<button
			on:click={onClick}
			class="flex btn btn-group-left btn-sm rounded-none variant-filled-surface rounded-l-full"
		>
			<div class="mr-1">
				<div class="icon__limit">
					<div class="lottie__container">
						<div class="lottie">
							<LottiePlayer
								bind:this={player}
								src={lottieLikeBtn}
								autoplay={false}
								controls={false}
								renderer="svg"
								background="transparent"
								height={62}
								width={62}
								controlsLayout={[]}
							/>
						</div>
					</div>
				</div>
			</div>
			Like it
		</button>
		<button
			class="group btn btn-sm variant-filled-surface rounded-none rounded-r-full"
			class:active={isDislike}
			on:click={onCopyClick}
			use:clipboard={'http://localhost:5173'}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 mr-2 fill-white">
				<path
					d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H304v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16h64V160H64z"
				/>
			</svg>
			{copyState ? '👍🎉🥰' : 'Share link'}
		</button>
	</div>
{/await}

<style lang="postcss">
	.btn-group-left {
		position: relative;
		&::after {
			content: '';
			background: rgba(255, 255, 255, 0.2);
			position: absolute;
			right: 0;
			top: 8px;
			height: 20px;
			width: 1px;
		}
	}
	.icon__limit {
		@apply relative;
		width: 24px;
		height: 24px;

		&.dislike {
			fill: white;
		}
	}
	.lottie {
		@apply absolute;
		&__container {
			@apply flex items-center justify-center w-full h-full;
		}
	}
</style>
