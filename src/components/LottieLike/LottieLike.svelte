<script lang="ts">
	import lottieLikeBtn from '../../assets/lottie/like-btn.json';
	import Dislike from '../../assets/Dislike.svelte';
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
</script>

{#await promise then LottiePlayer}
	<div class="btn-group btn-group-sm variant-filled-surface">
		<button on:click={onClick}>
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
			293
		</button>
		<button>
			<div class="icon__limit dislike">
				<Dislike />
			</div>
		</button>
	</div>
{/await}

<style lang="postcss">
	.btn-group-sm > button {
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.375rem;
		padding-bottom: 0.375rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
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
