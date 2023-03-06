<script lang="ts">
	import lottieLikeBtn from '../../../../assets/lottie/like-btn.json';
	import Dislike from '../../../../assets/Dislike.svelte';
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
			199K
		</button>
		<button
			class="group btn btn-sm variant-filled-surface rounded-none rounded-r-full"
			class:active={isDislike}
			on:click={() => (isDislike = !isDislike)}
		>
			<div class="icon__limit dislike group-[.active]:rotate-180 transition-transform flip">
				<Dislike />
			</div>
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
