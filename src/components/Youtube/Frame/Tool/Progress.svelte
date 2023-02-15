<script lang="ts">
	import { spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { frameSecond } from '../../../../store/frame/frame';

	export let item: string = '';
	export let scale: number = 0;
	export let index: number;

	let isShowPreview = false;
	let coords = spring({ x: 50 }, { stiffness: 1, damping: 1 });
</script>

<div class="progress-bar__chapter">
	<button
		on:click={(e) => {
			frameSecond.handleClickProgress(index, (10 / e.currentTarget.offsetWidth) * e.offsetX);
		}}
		on:mouseenter={() => (isShowPreview = true)}
		on:mouseleave={() => (isShowPreview = false)}
		on:mousemove={(e) => {
			coords.set({ x: e.offsetX });
		}}
		class="progress-bar__padding"
	/>
	<div class="progress-bar__wrapper pointer-events-none">
		<!-- <div class="progress-bar__load-progress" /> -->
		<div class="progress-bar__player-progress" style={`transform: scaleX(${scale})`} />
	</div>
	{#if isShowPreview}
		<div class="preview pointer-events-none text-xs pb-3" in:fade style={`left: ${$coords.x}px`}>
			{item}
		</div>
	{/if}
</div>

<style lang="postcss">
	.preview {
		height: unset !important;
		position: absolute;
		top: 0;
		@apply -translate-y-full -translate-x-1/2 text-center;
	}
	.progress-bar__chapter:hover .progress-bar__wrapper {
		transform: scaleY(1.5);
	}
	.progress-bar {
		&__chapter {
			@apply float-left h-full relative;
			width: calc((100% - 8px) / 5);
			margin-right: 2px;
			&:last-child {
				margin-right: 0;
			}
			& > div {
				@apply w-full h-full;
			}
		}
		&__padding {
			position: absolute;
			height: 16px !important;
			width: 100%;
			bottom: 0;
		}
		&__wrapper {
			@apply bg-white/20;
			transform: scaleY(0.6);
			transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);
			& > div {
				@apply w-full h-full origin-left;
			}
		}

		&__player-progress {
			transform: scaleX(0);
			background-color: #f00;
		}
	}
</style>
