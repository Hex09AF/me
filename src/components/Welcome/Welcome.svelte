<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import CircleText from './CircleText.svelte';

	onMount(() => {
		const tl = gsap
			.timeline()
			.to('#circle-welcome', { padding: '100%', borderRadius: 0 }, 0)
			.to('#fs-welcome', { x: '0%' }, 0)
			.to('#sc-welcome', { x: '0%' }, 0)
			.to('#tr-welcome', { x: '0%' }, 0)
			.to('#fs-welcome', { yPercent: 250, opacity: 0 }, 0.5)
			.to('#sc-welcome', { yPercent: 150, opacity: 0 }, 0.5)
			.to('#tr-welcome', { yPercent: 100, opacity: 0 }, 0.5)
			.to('#circle-welcome', { opacity: 0 }, 0.75)
			.to('#circle-name', { x: '0%', borderRadius: 0 }, 0.75)
			.to('#fs-name', { x: '0%' }, 0.8)
			.to('#sc-name', { x: '0%' }, 0.9)
			.to('#tr-name', { x: '0%' }, 1)
			.to('#fs-name', { x: '100%', opacity: 0 }, 1.5)
			.to('#sc-name', { x: '100%', opacity: 0 }, 1.55)
			.to('#tr-name', { x: '100%', opacity: 0 }, 1.6)
			.to('#circle-name', { opacity: 0, x: '100%', borderRadius: 9999 }, 1.6)
			.to('#circle-text', { padding: '50%' }, 2)
			.to('#fs-text', { opacity: 1, rotate: 50 }, 2)
			.to('#sc-text', { opacity: 1, rotate: -70 }, 2)
			.to('#tr-text', { opacity: 1, rotate: 90 }, 2)
			.to('#qd-text', { opacity: 1, rotate: -110 }, 2)
			.to('#fs-text', { opacity: 1, width: '3000px', height: '3000px', ease: 'back.in(1.7)' }, 2.5)
			.to('#sc-text', { opacity: 1, width: '3000px', height: '3000px', ease: 'back.in(1.7)' }, 2.5)
			.to('#tr-text', { opacity: 1, width: '3000px', height: '3000px', ease: 'back.in(1.7)' }, 2.5)
			.to('#qd-text', { opacity: 1, width: '3000px', height: '3000px', ease: 'back.in(1.7)' }, 2.5)
			.to('#circle-text', { padding: 0 }, 2.5);
	});
</script>

<section class="z-20 uppercase font-bold leading-[1] h-full">
	<div id="welcome-wrapper" class="relative overflow-hidden h-full">
		<section id="section-welcome" class="w-full h-full absolute flex flex-col justify-center">
			<div
				id="circle-welcome"
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 "
			/>
			<div id="fs-welcome" class="welcome text-center w-full text-[10vw] text-red-600">Welcome</div>
			<div id="sc-welcome" class="welcome text-center w-full text-[10vw]">Welcome</div>
			<div id="tr-welcome" class="welcome text-center w-full text-[10vw] text-zinc-800">Welcome</div>
		</section>

		<section id="section-name" class="w-full h-full absolute flex flex-col justify-center">
			<div id="circle-name" class="absolute rounded-full bg-indigo-500 p-[50%]" />
			<div id="fs-name" class="name text-center w-full text-[10vw] text-indigo-600">Quoc Huy</div>
			<div id="sc-name" class="name text-center w-full text-[10vw]">Quoc Huy</div>
			<div id="tr-name" class="name text-center w-full text-[10vw] text-zinc-800">Quoc Huy</div>
		</section>

		<section id="section-text" class="absolute top-0 w-full h-full">
			<div
				id="circle-text"
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500"
			/>
			<div class="relative w-full h-full">
				<div
					id="fs-text"
					class="origin-center opacity-0 w-[25%] h-[25%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText fillColor="fill-amber-600" />
				</div>
				<div
					id="sc-text"
					class="origin-center opacity-0 w-[55%] h-[55%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText />
				</div>
				<div
					id="tr-text"
					class="origin-center opacity-0 w-[90%] h-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText fillColor="fill-amber-600" />
				</div>
				<div
					id="qd-text"
					class="origin-center opacity-0 w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText />
				</div>
			</div>
		</section>
	</div>
</section>

<style>
	#fs-welcome,
	#tr-welcome {
		transform: translate3d(-100%, 0, 0);
	}
	#sc-welcome {
		transform: translate3d(100%, 0, 0);
	}
	#circle-name {
		transform: translate3d(-100%, 0, 0);
	}

	#fs-name,
	#sc-name,
	#tr-name {
		transform: translate3d(-100%, 0, 0);
	}
</style>
