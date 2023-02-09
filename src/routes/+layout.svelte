<script>
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '../app.postcss';
</script>

<AppBar class="container mx-auto" background="bg-surface-100-900-token" shadow="shadow-none">
	<svelte:fragment slot="lead">
		<a href="/">
			<div class="uppercase font-bold leading-[1]">
				<div>Quoc Hex Hex</div>
				<div>Hex Hex Hex</div>
				<div>Hex Hex Huy</div>
			</div>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<ul>
			<li>
				<a href="/"> Works </a>
				<a href="/"> About </a>
				<a href="/"> Contact </a>
			</li>
		</ul>
		<LightSwitch />
	</svelte:fragment>
</AppBar>
<div class="mx-auto">
	<slot />
</div>
