<script lang="ts">
	import { fly } from 'svelte/transition';

	let h: number;
	const inspired = [
		'awwwards.com',
		'bepatrickdavid.com',
		'jason.af',
		'lunchbox.studiofreight.com',
		'briceclain.com',
		'eeerik.com',
		'cristurm.github.io/nyan-cat',
		'youtu.be/jfKfPfyJRdk',
		'thachtran.com',
		'hoang.moe',
		'joshwcomeau.com',
		'www.deso.com'
	];
</script>

<div class="w-full h-full">
	<div class="flex flex-col w-full items-center h-full overflow-hidden">
		<div class="flex-1" in:fly={{ y: h, duration: 10000 }} bind:clientHeight={h}>
			<div class="grid grid-cols-3 gap-2">
				{#each inspired as item}
					<div class="text-right">Inspired by</div>
					<div class="text-left col-span-2">{item}</div>
				{/each}
			</div>
			<div class="mt-4">And shout out for so many beautiful personal portfolio out there.</div>
		</div>
	</div>
</div>
