<script lang="ts">
	import { fly } from 'svelte/transition';
	import NavLink from '../../../NavLink/NavLink.svelte';

	let h: number;
	const inspired = [
		'awwwards.com',
		'bepatrickdavid.com',
		'jason.af',
		'lunchbox.studiofreight.com',
		'briceclain.com',
		'eeerik.com',
		'thachtran.com',
		'hoang.moe',
		'joshwcomeau.com',
		'deso.com'
	];
	function addhttp(url: string) {
		return 'https://' + url;
	}
</script>

<div class="w-full h-full">
	<div class="flex flex-col w-full justify-center h-full overflow-hidden">
		<div in:fly={{ y: h, duration: 5000 }} bind:clientHeight={h}>
			<div class="text-center">❤️ Inspired by:</div>
			<div class="grid grid-cols-2 gap-2">
				{#each inspired as item, idx}
					<NavLink
						icon=""
						content={item}
						href={addhttp(item)}
						target="_blank"
						rel="external nofollow noreferrer"
					/>
				{/each}
			</div>
			<div class="mt-4 text-center text-sm">
				And shout out for so many beautiful personal portfolio out there.
			</div>
		</div>
	</div>
</div>
