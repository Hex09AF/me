<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	// import Scrollbar from 'smooth-scrollbar';
	import { onMount } from 'svelte';
	import Case from './SelectedCase/Case.svelte';
	import ProjectCard from './SelectedCase/ProjectCard.svelte';

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
</script>

<section class="my-10">
	{#each listProject as item, idx}
		{@const isOdd = idx % 2 == 1}
		<Case {isOdd} {item} />
	{/each}
</section>
