<script>
	import { Canvas } from '@threlte/core';
	import Keychain from '../Model/Keychain.svelte';
	import Model from '../Model/Model.svelte';
</script>

<div class="flex w-full h-full justify-between items-start relative">
	<div class="absolute right-0 w-full h-full">
		<Canvas>
			<!-- <Model /> -->
			<Keychain />
		</Canvas>
	</div>
	<div class="flex">
		<h1 class="header-main-line revert-text">
			<p class="block">
				My name is <span class="text-3xl font-bold">Quoc Huy</span>, a web developer from Vietnam
			</p>
			<p>Welcome to my base. Let's travel through this together, will ya.</p>
		</h1>
	</div>
</div>
