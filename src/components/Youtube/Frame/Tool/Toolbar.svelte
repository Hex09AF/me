<script>
	import { SCENCE } from '../../../../store/scence';
	import Progress from './Progress.svelte';

	const scenceAr = Object.values(SCENCE);
</script>

<div class="live-media__actions">
	<div class="progress-bar">
		<div class="progress-bar__chapter-container">
			{#each scenceAr as item}
				<Progress {item} />
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
			@apply h-full w-full;
		}
	}
</style>
