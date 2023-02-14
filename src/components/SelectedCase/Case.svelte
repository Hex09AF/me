<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	export let isOdd = false;
	export let item: any;
	export let isDetail = false;

	function seeDetail() {
		isDetail = !isDetail;
	}
</script>

<div class:isOdd class="content-item grid grid-cols-2 prose rounded-3xl overflow-hidden">
	<div class:col-start-2={isOdd} class="row-start-1">
		<ProjectCard
			onDetail={seeDetail}
			title={item.title}
			role={item.role}
			description={item.description}
		/>
	</div>
	<div class:relative={isDetail} class:col-start-1={isOdd} class={`${item.bg} row-start-1`}>
		{#if isDetail}
			<div class="special-grid-wrapper relative">
				<div class="special-grid">
					<div class="number number-1">
						<span>Authentication / Authorization</span>
					</div>
					<div class="number number-2">
						<span>CMS</span>
					</div>
					<div class="number number-3">
						<span>Client</span>
					</div>
					<div class="number number-4">
						<span>Vendor</span>
					</div>
				</div>
				<div
					class={` absolute right-0 text-7xl bottom-0 rotate-180 font-black`}
					style="writing-mode: vertical-rl;text-orientation: sideways;"
				>
					{item.title}
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.special-grid-wrapper {
		height: 100%;
	}
	.special-grid {
		height: 100%;
		position: relative;
		transition: 500ms;
		display: grid;
		grid-template-rows: 0.5fr 0.5fr 0.5fr 2.5fr;

		.number:first-child {
			border-top: none;
		}
	}

	:where(.number) {
		@apply p-3;
		transition: 300ms;
		border-top: 2px dashed white;
	}

	:where(.number):hover {
		@apply bg-white text-black;
	}

	.special-grid:has(.number-1:hover) {
		grid-template-rows: 2.5fr 0.5fr 0.5fr 0.5fr;
	}

	.special-grid:has(.number-2:hover) {
		grid-template-rows: 0.5fr 2.5fr 0.5fr 0.5fr;
	}
	.special-grid:has(.number-3:hover) {
		grid-template-rows: 0.5fr 0.5fr 2.5fr 0.5fr;
	}

	.content-item {
		position: relative;
	}
	.content-item::before {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		height: 100%;
		width: 2px;
		background-color: black;
		z-index: 10;
	}
	.content-item {
		border: 2px solid black;
		margin-top: -2px;
	}
</style>
