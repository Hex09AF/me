<script>
	import Contact from '../components/Contact/Contact.svelte';
	import SelectedCase from '../components/SelectedCase.svelte';
	import Welcome from '../components/Welcome/Welcome.svelte';
	import YoutubeLive from '../components/Youtube/YoutubeLive.svelte';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const chatTl = gsap.timeline().to('#scrollMedia', { z: 200, opacity: 0 }, 0);

		ScrollTrigger.create({
			animation: chatTl,
			trigger: '#scrollTest',
			start: `top top`,
			end: `+=1000`,
			scrub: 1,
			pinSpacing: false,
			pin: true
		});

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

		ScrollTrigger.create({
			animation: tl,
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

<div>
	<div class="container mx-auto px-4">
		<YoutubeLive />
	</div>
	<Welcome />
	<div class="container mx-auto px-4">
		<SelectedCase />
	</div>
	<div class="container mx-auto px-4">
		<Contact />
	</div>
</div>
