<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import CircleText from './CircleText.svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const inWelcome = 1;
		const outWelcome = 1;
		const inName = 1;
		const outName = 1.5;
		const inText = 1;
		const outText = 1;

		const tl = gsap
			.timeline()
			// Slower than text
			.to(
				'#circle-welcome',
				{ padding: '100%', borderRadius: 0, duration: inWelcome + 2 },
				'in:welcome'
			)
			// Same as circle
			.to('#fs-welcome', { x: '0%', duration: inWelcome }, '<')
			.to('#sc-welcome', { x: '0%', duration: inWelcome }, '<')
			.to('#tr-welcome', { x: '0%', duration: inWelcome }, '<')
			// Overlap with welcome
			.to('#fs-welcome', { yPercent: 250, opacity: 0, duration: outWelcome }, '-=2')
			.to('#sc-welcome', { yPercent: 150, opacity: 0, duration: outWelcome }, '<')
			.to('#tr-welcome', { yPercent: 100, opacity: 0, duration: outWelcome }, '<')
			.to('#circle-welcome', { opacity: 0, duration: outWelcome }, '<')

			.to('#circle-name', { x: '0%', duration: inName + 1 }, '>-=1')
			.to('#fs-name', { x: '0%', duration: inName }, '<+=0.25')
			.to('#sc-name', { x: '0%', duration: inName }, '<+=0.35')
			.to('#tr-name', { x: '0%', duration: inName }, '<+=0.45')
			.to('#tr-name', { x: '100%', opacity: 0, duration: outName }, '>')
			.to('#sc-name', { x: '100%', opacity: 0, duration: outName }, '<')
			.to('#fs-name', { x: '100%', opacity: 0, duration: outName }, '<')
			.to('#circle-name', { opacity: 0, x: '100%', duration: outName }, '<')
			.to('#circle-text', { padding: '65%', duration: inText }, '>-1')
			.to('#fs-text', { opacity: 1, rotate: 50, duration: inText }, '<')
			.to('#sc-text', { opacity: 1, rotate: -70, duration: inText }, '<')
			.to('#tr-text', { opacity: 1, rotate: 90, duration: inText }, '<')
			.to('#qd-text', { opacity: 1, rotate: -110, duration: inText }, '<')
			.to(
				'#fs-text',
				{
					width: 3000,
					height: 3000,
					ease: 'back.in(1.7)',
					duration: outText
				},
				'>'
			)
			.to(
				'#sc-text',
				{
					width: 3000,
					height: 3000,
					ease: 'back.in(1.7)',
					duration: outText
				},
				'<'
			)
			.to(
				'#tr-text',
				{
					width: 3000,
					height: 3000,
					ease: 'back.in(1.7)',
					duration: outText
				},
				'<'
			)
			.to(
				'#qd-text',
				{
					width: 3000,
					height: 3000,
					ease: 'back.in(1.7)',
					duration: outText
				},
				'<'
			)
			.to('#circle-text', { padding: 0, duration: outText }, '<');

		// ScrollTrigger.create({
		// 	animation: tl,
		// 	scroller: '#scrollWrapper',
		// 	trigger: '#welcome-wrapper',
		// 	start: 'top top',
		// 	end: '+=10000',
		// 	scrub: 1,
		// 	pin: true
		// });
	});
</script>

<section class="z-20 uppercase font-bold leading-[1] h-[100%]">
	<div id="welcome-wrapper" class="relative overflow-hidden h-full">
		<section id="section-welcome" class="w-full h-full absolute flex flex-col justify-center">
			<div
				id="circle-welcome"
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 "
			/>
			<div id="fs-welcome" class="welcome text-center w-full text-[10vw] text-red-600">Welcome</div>
			<div id="sc-welcome" class="welcome text-center w-full text-[10vw] text-white">Welcome</div>
			<div id="tr-welcome" class="welcome text-center w-full text-[10vw] text-zinc-800">
				Welcome
			</div>
		</section>

		<section id="section-name" class="w-full h-full absolute flex flex-col justify-center">
			<div id="circle-name" class="absolute rounded-full bg-indigo-500 p-[50%]" />
			<div id="fs-name" class="name text-center w-full text-[10vw] text-indigo-600">Quoc Huy</div>
			<div id="sc-name" class="name text-center w-full text-[10vw] text-white">Quoc Huy</div>
			<div id="tr-name" class="name text-center w-full text-[10vw] text-zinc-800">Quoc Huy</div>
		</section>

		<section id="section-text" class="absolute top-0 w-full h-full overflow-hidden">
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
					class="origin-center opacity-0 w-[95%] h-[95%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
