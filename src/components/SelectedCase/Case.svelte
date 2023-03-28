<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	export let isOdd = false;
	export let item: any;
	export let isDetail = true;

	function seeDetail() {
		isDetail = !isDetail;
	}
</script>

<div
	class:isOdd
	class="content-item lg:h-[80vh] grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 prose rounded-3xl overflow-hidden"
>
	<div
		class:lg:col-start-1={isOdd}
		class:lg:col-start-2={!isOdd}
		class={`${item.bg} grow row-start-1 relative z-[5]`}
	>
		<div
			class="h-full bg-cover bg-no-repeat bg-center"
			style="background-image: url('{item.projectImg}')"
		>
			<div class="w-full h-full px-4 pt-10 backdrop-brightness-50">
				<img
					class="object-contain max-h-[90%] m-auto shadow-[0_0_16px_8px_rgba(0,0,0,0.5)]"
					src={item.projectImg}
					alt="project"
				/>
			</div>
		</div>
	</div>

	<span
		class="absolute bg-black z-10 left-1/2 -translate-x-1/2 w-[2px] h-full hidden lg:block"
		aria-hidden="true"
	/>
	<span
		class="absolute bg-black z-10 top-1/2 -translate-y-1/2 h-[2px] w-full block lg:hidden"
		aria-hidden="true"
	/>

	<div
		class:lg:col-start-2={isOdd}
		class:lg:col-start-1={!isOdd}
		class="grow row-start-2 lg:row-start-1"
	>
		<ProjectCard
			marqueeBg={item.bg}
			onDetail={seeDetail}
			title={item.title}
			role={item.role}
			description={item.description}
		/>
	</div>
</div>

<style lang="postcss">
	.content-item {
		position: relative;
		max-height: 1000px;
	}
	.content-item {
		border: 2px solid black;
		margin-top: -2px;
	}
</style>
