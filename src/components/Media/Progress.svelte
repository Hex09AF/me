<script lang="ts">
	import { fade } from 'svelte/transition';
	import { currentScence, SCENCE } from '../../store/scence';
	export let item: string = '';

	let isShowPreview = false;
</script>

<button
	class="progress-bar__chapter"
	on:click={() => {
		currentScence.update(() => item);
	}}
	on:mouseenter={() => (isShowPreview = true)}
	on:mouseleave={() => (isShowPreview = false)}
>
	<div class="progress-bar__wrapper">
		<div class="progress-bar__player-progress" />
		<div class="progress-bar__chapter-buffer" />
		<div class="progress-bar__load-progress" />
	</div>
	{#if isShowPreview}
		<div class="preview" transition:fade>{item}</div>
	{/if}
</button>

<style lang="postcss">
	.preview {
		height: unset !important;
		position: absolute;
		top: 0;
		@apply -translate-y-full;
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

		&__wrapper {
			@apply bg-white/20;
			transform: scaleY(0.6);
			transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);
			& > div {
				@apply w-full h-full origin-left;
			}
		}

		&__player-progress {
			@apply bg-red-500;
		}
	}
</style>
