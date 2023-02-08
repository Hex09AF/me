<script>
	import { onMount } from 'svelte';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import CircleText from './CircleText.svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap
			.timeline()
			.from('#fs-welcome', { xPercent: -100 })
			.from('#sc-welcome', { xPercent: 100 }, 0)
			.from('#tr-welcome', { xPercent: -100 }, 0)
			.to('#circle', { width: '100vw', height: '100vw', borderRadius: 0 }, 0)
			.to('#fs-welcome', { yPercent: 250, opacity: 0 }, 0.5)
			.to('#sc-welcome', { yPercent: 150, opacity: 0 }, 0.5)
			.to('#tr-welcome', { yPercent: 100, opacity: 0 }, 0.5)
			.to('#circle', { opacity: 0 }, 0.75)
			.from(
				'#circle-2',
				{
					x: '-100vw',
					borderRadius: 9999
				},
				0.75
			)
			.from('#fs-name', { xPercent: -100 }, 0.8)
			.from('#sc-name', { xPercent: -100 }, 0.9)
			.from('#tr-name', { xPercent: -100 }, 1)
			.to('#fs-name', { xPercent: 100, opacity: 0 }, 1.6)
			.to('#sc-name', { xPercent: 100, opacity: 0 }, 1.55)
			.to('#tr-name', { xPercent: 100, opacity: 0 }, 1.5)
			.to('#circle-2', { opacity: 0 }, 1.5)
			.to('#circle-3', { width: '100vw', height: '100vw', borderRadius: 0 }, 2)
			.to('#fs-text', { opacity: 1, rotate: 50 }, 2)
			.to('#sc-text', { opacity: 1, rotate: -70 }, 2)
			.to('#tr-text', { opacity: 1, rotate: 90 }, 2)
			.to('#qd-text', { opacity: 1, rotate: -110 }, 2)
			.to('#fs-text', { opacity: 1, width: '3000px', height: '3000px', ease: 'back.in(1.7)' }, 2.5)
			.to('#sc-text', { opacity: 1, width: '3000px', height: '3000px', ease: 'back.in(1.7)' }, 2.5)
			.to('#tr-text', { opacity: 1, width: '3000px', height: '3000px', ease: 'back.in(1.7)' }, 2.5)
			.to('#qd-text', { opacity: 1, width: '3000px', height: '3000px', ease: 'back.in(1.7)' }, 2.5)
			.to('#circle-3', { width: '0vw', height: '0vw', borderRadius: 9999 }, 2.5);

		ScrollTrigger.create({
			animation: tl,
			markers: true,
			trigger: '#welcome-wrapper',
			start: `top top`,
			end: '+=5000',
			scrub: 1,
			pin: true
		});

		const eles = gsap.utils.toArray('.content-item');
		eles.forEach((panel, i) => {
			if (i != eles.length - 1) {
				ScrollTrigger.create({
					trigger: panel,
					start: 'top top',
					end: '+=' + panel.offsetHeight * (eles.length - i - 1),
					scrub: 1,
					pin: true,
					pinSpacing: false
				});
			}
		});
	});
</script>

<section class="z-20 uppercase font-bold leading-[1]">
	<div id="welcome-wrapper" class="relative h-[100vh]">
		<div
			id="circle"
			class="bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
		/>
		<div
			id="circle-2"
			class="bg-indigo-500 w-[100vw] h-[100vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		/>
		<div
			id="circle-3"
			class="bg-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
		/>
		<div id="fs-welcome" class="welcome text-[20vw] text-red-600">Welcome</div>
		<div id="sc-welcome" class="mt-[-100px] welcome text-[20vw]">Welcome</div>
		<div id="tr-welcome" class="mt-[-150px] welcome text-[20vw] text-zinc-800">Welcome</div>

		<div class="absolute top-0">
			<div id="fs-name" class="name text-[17vw] text-indigo-600">Quoc Huy</div>
			<div id="sc-name" class="mt-[-100px] name text-[17vw]">Quoc Huy</div>
			<div id="tr-name" class="mt-[-150px] name text-[17vw] text-zinc-800">Quoc Huy</div>
		</div>

		<div class="absolute top-0 w-full h-full">
			<div class="relative w-full h-full">
				<div
					id="fs-text"
					class="origin-center opacity-0 w-[25vw] h-[25vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText fillColor="fill-amber-600" />
				</div>
				<div
					id="sc-text"
					class="origin-center opacity-0 w-[55vw] h-[55vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText />
				</div>
				<div
					id="tr-text"
					class="origin-center opacity-0 w-[90vw] h-[90vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText fillColor="fill-amber-600" />
				</div>
				<div
					id="qd-text"
					class="origin-center opacity-0 w-[150vw] h-[150vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText />
				</div>
			</div>
		</div>

		<div>Quoc Hex Hex</div>
		<div>Hex Hex Hex</div>
		<div>Hex Hex Huy</div>
	</div>
</section>
