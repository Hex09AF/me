<script lang="ts">
	import { linear } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { currentScence, SCENCE } from '../../../../store/scence';
	import Progress from './Progress.svelte';

	const scenceAr = Object.values(SCENCE);
	const second = tweened(0, {
		duration: 50000,
		easing: linear
	});
	second.set(50);
	const timePerScence = 50 / scenceAr.length;
	const ratio = 1 / timePerScence;

	function handleClickProgress(index: number, calSec: number) {
		const curSec = index * timePerScence + calSec;
		second.set(curSec, {
			duration: 0
		});
		second.set(50, {
			duration: (50 - curSec) * 1000,
			easing: linear
		});
	}
</script>

<div class="live-media__toolbar">
	<div class="progress-bar">
		<div class="progress-bar__chapter-container">
			{#each scenceAr as item, index}
				<Progress
					{item}
					scale={Math.max(0, Math.min($second - timePerScence * index, timePerScence)) * ratio}
					{index}
					{handleClickProgress}
				/>
			{/each}
		</div>
	</div>
	<div class="controls-bar py-2 px-1">
		<div class="text-sm">
			• {$currentScence}
		</div>
	</div>
</div>

<style lang="postcss">
	.live-media {
		&__toolbar {
			@apply absolute bottom-0 w-full opacity-0 transition-opacity ease-out;
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
