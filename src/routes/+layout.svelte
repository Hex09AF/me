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
	class="container mx-auto fixed z-10 w-full left-0 right-0 pb-4"
	background="bg-surface-100-900-token"
	shadow="shadow-none"
>
	<svelte:fragment slot="lead">
		<a href="/">
			<div class="uppercase font-bold leading-[1] text-xs text-center">
				<div>Quoc Hex Hex</div>
				<div>Hex Hex Hex</div>
				<div>Hex Hex Huy</div>
			</div>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<ul class="flex gap-3">
			<li>
				<NavLink content="About" href="/" />
			</li>
			<li>
				<NavLink content="Works" href="/" />
			</li>
			<li>
				<NavLink content="Contact" href="/" />
			</li>
		</ul>
		<LightSwitch />
	</svelte:fragment>
	<div class="header-blur w-[200vw] -left-1/2" />
</AppBar>

<div class={`mx-auto pt-[80px]`}>
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
