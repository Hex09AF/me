<script>
	import Contact from '../components/Contact/Contact.svelte';
	import SelectedCase from '../components/SelectedCase.svelte';
	import YoutubeLive from '../components/Youtube/YoutubeLive.svelte';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.header-blur', {
			scrollTrigger: {
				trigger: '.header-blur',
				start: 'top top',
				scrub: 1
			},
			opacity: 1
		});
	});
</script>

<div class="container mx-auto px-4">
	<YoutubeLive />
	<SelectedCase />
	<Contact />
</div>
