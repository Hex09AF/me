<script>
	import { Canvas } from '@threlte/core';
	import { onMount } from 'svelte';
	import Model from '../Model/Model.svelte';
	onMount(() => {
		const text = document.getElementById('txt');
		const rect = text.getBoundingClientRect();
		const len = rect.right - rect.left + 1;
		const ar = [10, 20, 30, 40, 50, 60, 70, 80, 90];
		const centroids = ar.map((v) => {
			return (len * v) / 100 / 2 + rect.left;
		});

		const ratio = 99 / 500;

		window.addEventListener('mousemove', (e) => {
			e.preventDefault();
			const pos = [e.clientX, e.clientY];
			const [l] = pos;
			const difs = centroids.map((v) => {
				return Math.ceil(Math.min(Math.abs(l - v), 99));
			});
			const opcs = difs.map((v) => {
				return (v + '').padStart(2, '0');
			});
			const styles = `
	background-image: linear-gradient(
			125deg,
			#000000${opcs[0]} 10%,
			#000000${opcs[1]} 20%,
			#000000${opcs[2]} 30%,
			#000000${opcs[3]} 40%,
			#000000${opcs[4]} 50%,
			#000000${opcs[5]} 60%,
			#000000${opcs[6]} 70%,
			#000000${opcs[7]} 80%,
			#000000${opcs[8]} 90%
		),
		linear-gradient(
			125deg,
			#ff0084 15%,
			#fca400 30%,
			#ffff00 45%,
			#00ff8a 60%,
			#00cfff 75%,
			#cc4cfa 90%
		);`;
			text.style = styles;
		});
	});
</script>

<div class="flex w-full h-full justify-between relative">
	<div class="absolute right-0 w-full h-full">
		<Canvas>
			<Model />
		</Canvas>
	</div>
	<div class="flex items-center">
		<h1 class="header-main-line revert-text">
			<span class="text-5xl block font-bold deep uppercase">You</span>
			<span id="txt" class="main-line text-6xl block font-bold uppercase">Yes you</span>
			<p class="block">
				<span class="text-3xl font-bold">I'm Hex</span>, a web developer from Vietnam
			</p>
			<p>Welcome to my base. Let's travel through this together, will ya.</p>
		</h1>
	</div>
</div>
