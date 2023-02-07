<script>
	import { onMount } from 'svelte';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const welcomes = gsap.utils.toArray('.welcome');
		welcomes.forEach((welcome, i) => {
			const tl = gsap.timeline();
			tl.from(welcome, { xPercent: 100 * (i % 2 == 0 ? 1 : -1) }).to(welcome, {
				yPercent: 500,
				opacity: 0
			});
			ScrollTrigger.create({
				animation: tl,
				markers: true,
				trigger: '#welcome-wrapper',
				start: `-=${i} top`,
				scrub: 1,
				pinSpacing: false,
				pin: true
			});
		});

		const tl = gsap.timeline();
		tl.to('#circle', { width: '100vw', height: '100vw', borderRadius: 0 }).from('#circle-2', {
			x: '-100vw',
			borderRadius: 9999
		});

		ScrollTrigger.create({
			animation: tl,
			markers: true,
			trigger: '#welcome-wrapper',
			start: `-=5 top`,
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
	<div id="welcome-wrapper" class="relative h-screen">
		<div
			id="circle"
			class="bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
		/>
		<div
			id="circle-2"
			class="bg-indigo-600 w-[100vw] h-[100vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		/>
		<div id="fs-welcome" class="welcome text-[20vw] text-red-600">Welcome</div>
		<div id="sc-welcome" class="mt-[-100px] welcome text-[20vw]">Welcome</div>
		<div id="tr-welcome" class="mt-[-150px] welcome text-[20vw] text-zinc-800">Welcome</div>
	</div>
</section>
