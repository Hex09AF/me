<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	export let isOdd = false;
	export let item: any;
	export let isDetail = true;

	function seeDetail() {
		isDetail = !isDetail;
	}
</script>

<div class:isOdd class="content-item grid grid-cols-2 prose rounded-3xl overflow-hidden">
	<div class:col-start-2={isOdd} class="row-start-1">
		<ProjectCard
			marqueeBg={item.bg}
			onDetail={seeDetail}
			title={item.title}
			role={item.role}
			description={item.description}
		/>
	</div>
	<div class:relative={isDetail} class:col-start-1={isOdd} class={`${item.bg} row-start-1 `}>
		<div
			class="h-full bg-cover bg-no-repeat bg-center"
			style="background-image: url('{item.projectImg}')"
		>
			<div class="w-full h-full px-4 pt-10 backdrop-brightness-50">
				<img
					class="object-contain max-h-[85%] m-auto shadow-[0_0_16px_8px_rgba(0,0,0,0.5)]"
					src={item.projectImg}
					alt="project"
				/>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.content-item {
		position: relative;
		height: 80vh;
		max-height: 1000px;
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
