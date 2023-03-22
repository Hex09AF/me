<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '../app.postcss';
	import NavLink from '../components/NavLink/NavLink.svelte';
</script>

<svelte:head>
	<title>Quoc Huy - Developer. Dreamer. Lover.</title>
</svelte:head>

<AppBar
	class="container mx-auto fixed z-10 top-0 left-0 right-0 h-[80px] justify-center"
	background="bg-surface-100-900-token"
	shadow="shadow-none"
>
	<svelte:fragment slot="lead">
		<a href="/">
			<div class="uppercase font-bold leading-[1] text-sm text-center">
				<div>Quochuy.dev</div>
			</div>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<ul class="flex gap-5">
			<li>
				<NavLink content="About" href="#about" icon="🙋‍♂️" />
			</li>
			<li>
				<NavLink content="Projects" href="#projects" icon="🧑‍💻" />
			</li>
			<li>
				<NavLink content="Contact" href="#contact" icon="🙌" />
			</li>
		</ul>
		<LightSwitch />
	</svelte:fragment>
	<div class="header-blur w-[200vw] -left-1/2" />
</AppBar>

<div class={`mx-auto`}>
	<slot />
</div>

<style>
	.header-blur {
		position: absolute;
		top: 0;
		bottom: 0;
		background-color: rgba(216, 216, 216, 0.15);
		backdrop-filter: blur(6px);
		opacity: 0;
		z-index: -1;
	}
	:global(.dark) .header-blur {
		background-color: rgba(19, 19, 19, 0.15);
	}
</style>
