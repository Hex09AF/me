<script>
	import { Canvas } from '@threlte/core';
	import Keychain from '../Model/Keychain.svelte';
</script>

<div class="flex w-full h-full justify-between items-start relative">
	<div class="absolute right-0 w-full h-full">
		<Canvas>
			<Keychain />
		</Canvas>
	</div>
	<div class="revert-text mt-2 md:mt-6">
		<p class="block">
			My name is <span class="text-xl md:text-3xl font-bold">Quoc Huy</span>, passionate about
			developing quick and secure websites.
		</p>
	</div>
	<div class="absolute bottom-[45px] md:bottom-[60px] right-0 revert-text">
		<p>Welcome to my base. Let's travel through this together, will ya.</p>
	</div>
</div>
