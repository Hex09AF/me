<script lang="ts">
	import { FRAME_INFO, TOTAL_TIME } from '../../../../store/frame/constant';
	import type { KeyFrameInfo } from '../../../../store/frame/constant';
	import { frame, frameSecond } from '../../../../store/frame/frame';
	import { videoTimeFormat } from '../../../../utils/time';
	import Progress from './Progress.svelte';

	frameSecond.set(TOTAL_TIME);
	const scenceAr = Object.keys(FRAME_INFO) as KeyFrameInfo[];
</script>

<div class="live-media__toolbar">
	<div class="progress-bar">
		<div class="progress-bar__chapter-container">
			{#each scenceAr as item, index}
				<Progress
					item={FRAME_INFO[item].name}
					scale={frameSecond.scaleInfo($frameSecond, index)}
					{index}
				/>
			{/each}
		</div>
	</div>
	<div class="controls-bar py-2 px-1">
		<div class="text-xs">
			{videoTimeFormat($frameSecond)} / {videoTimeFormat(50)} • {$frame}
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
