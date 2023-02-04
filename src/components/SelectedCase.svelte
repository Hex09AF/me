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
			bg: 'bg-red-500'
		},
		{
			title: 'Devouch',
			role: 'Frontend developer',
			description: 'Spend wise time to get the voucher you deserve no matter where you are',
			bg: 'bg-lime-500'
		},
		{
			title: 'Sudoku',
			role: 'Frontend developer',
			description: 'Spend wise time to get the voucher you deserve no matter where you are',
			bg: 'bg-teal-500'
		},
		{
			title: 'ELearning',
			role: 'Frontend developer',
			description: 'Spend wise time to get the voucher you deserve no matter where you are',
			bg: 'bg-sky-500'
		}
	];

	let card: HTMLDivElement;
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const scroller = document.querySelector('#page');
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
		ScrollTrigger.defaults({ scroller: scroller });
		const eles = gsap.utils.toArray('.content-item');
		eles.forEach((panel, i) => {
			if (i != eles.length - 1) {
				ScrollTrigger.create({
					scroller: '#page',
					trigger: panel,
					start: '-=20px top',
					end: '+=' + panel.offsetHeight * (eles.length - i - 1),
					scrub: 1,
					pin: true,
					pinSpacing: false
				});
			}
		});
	});
</script>

<h1 class="text-center">Don't interested by the stream, here is other thing that you can look</h1>

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
			<div class:col-start-1={isOdd} class={`${item.bg} row-start-1`} />
		</div>
	{/each}
</section>

<style lang="postcss">
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
