<div class="live-media__actions">
	<div class="progress-bar">
		<div class="progress-bar__chapter-container">
			{#each [1, 2, 3] as item}
				<div class="progress-bar__chapter">
					<div class="progress-bar__player-progress" />
					<div class="progress-bar__chapter-buffer" />
					<div class="progress-bar__load-progress" />
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.live-media {
		&__actions {
			@apply absolute bottom-0 w-full;
		}
	}
	.progress-bar {
		@apply w-full;
		height: 5px;
		&__chapter-container {
			@apply h-full w-full cursor-pointer;
		}
		&__chapter {
			@apply float-left bg-white/20 h-full;
			transform: scaleY(0.6);
			width: calc((100% - 4px) / 3);
			margin-right: 2px;
			&:last-child {
				margin-right: 0;
			}
			&:hover {
				transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1),
					-webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
				transform: scaleY(1.5);
			}
			& > div {
				@apply w-full h-full origin-left;
			}
		}
		&__player-progress {
			@apply bg-red-500;
			transform: scaleX(0.5);
		}
	}
</style>
