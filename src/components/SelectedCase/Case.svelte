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
	class="content-item mt-[8px] md:mt-[-2px] md:max-h-[80vh] grid grid-rows-[0.5fr_1fr] grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 prose rounded-3xl overflow-hidden"
>
	<div
		class:lg:col-start-1={isOdd}
		class:lg:col-start-2={!isOdd}
		class={`${item.bg} row-start-1 relative z-[5]`}
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

	<div
		class:lg:col-start-2={isOdd}
		class:lg:col-start-1={!isOdd}
		class="row-start-2 lg:row-start-1"
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
		border: 2px solid black;
	}
</style>
