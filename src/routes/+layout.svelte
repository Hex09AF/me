<script>
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '../app.css';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="container mx-auto" background="bg-surface-100-900-token" shadow="shadow-none">
			<svelte:fragment slot="lead"><a href="/">Hex</a></svelte:fragment>
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
	</svelte:fragment>
	<div class="container mx-auto px-4">
		<slot />
	</div>
</AppShell>
