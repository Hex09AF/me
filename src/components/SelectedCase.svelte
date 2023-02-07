<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	// import Scrollbar from 'smooth-scrollbar';
	import { onMount } from 'svelte';
	import ProjectCard from './ProjectCard.svelte';

	const listProject = [
		{
			title: 'Foodelive',
			role: 'Frontend developer',
			description:
				"Whether you're ordering food for two or hosting a party for thousands people, you will always find the best menu and service that's right for you.",
			bg: 'bg-red-500',
			txt: 'text-red-400'
		},
		{
			title: 'Devouch',
			role: 'Frontend developer',
			description: 'Spend wise time to get the voucher you deserve no matter where you are',
			bg: 'bg-lime-500',
			txt: 'text-lime-400'
		},
		{
			title: 'Sudoku',
			role: 'Frontend developer',
			description: 'Spend wise time to get the voucher you deserve no matter where you are',
			bg: 'bg-teal-500',
			txt: 'text-teal-400'
		},
		{
			title: 'ELearning',
			role: 'Frontend developer',
			description: 'Spend wise time to get the voucher you deserve no matter where you are',
			bg: 'bg-sky-500',
			txt: 'text-sky-400'
		}
	];

	let card: HTMLDivElement;
	onMount(() => {
		// SMOOTH SCROLL

		// let bodyScrollBar = Scrollbar.init(scroller, {
		// 	damping: 0.1,
		// 	delegateTo: document,
		// 	alwaysShowTracks: true
		// });
		// ScrollTrigger.scrollerProxy('#page', {
		// 	scrollTop(value) {
		// 		if (arguments.length) {
		// 			bodyScrollBar.scrollTop = value;
		// 		}
		// 		return bodyScrollBar.scrollTop;
		// 	}
		// });
		// bodyScrollBar.addListener(ScrollTrigger.update);
		// gsap.registerPlugin(ScrollTrigger);
		// const scroller = document.querySelector('#page');
		// ScrollTrigger.defaults({ scroller: scroller });
		// const eles = gsap.utils.toArray('.content-item');
		// eles.forEach((panel, i) => {
		// 	if (i != eles.length - 1) {
		// 		ScrollTrigger.create({
		// 			scroller: '#page',
		// 			trigger: panel,
		// 			start: 'top top',
		// 			end: '+=' + panel.offsetHeight * (eles.length - i - 1),
		// 			scrub: 1,
		// 			pin: true,
		// 			pinSpacing: false
		// 		});
		// 	}
		// });
	});
</script>

<section class="my-10">
	{#each listProject as item, idx}
		{@const isOdd = idx % 2 == 1}
		<div
			bind:this={card}
			class:isOdd
			class="content-item grid grid-cols-2 prose rounded-3xl overflow-hidden"
		>
			<div class:col-start-2={isOdd} class="row-start-1">
				<ProjectCard title={item.title} role={item.role} description={item.description} />
			</div>
			<div class:relative={false} class:col-start-1={isOdd} class={`${item.bg} row-start-1`}>
				{#if false}
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
	{/each}
</section>

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
