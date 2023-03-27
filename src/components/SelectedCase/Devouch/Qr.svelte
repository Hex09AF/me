<script>
	import qrImg from '../../../assets/project/qr.webp';
</script>

<div class="relative overflow-hidden">
	<img id="qrImage" src={qrImg} alt="qr" width="80" height="80" class="rotate-90 origin-center" />
	<div class="absolute w-[full] h-[120%] left-0">
		{#each new Array(20).fill(0) as item}
			<div class="qr-line h-full w-[4px]" />
		{/each}
	</div>
</div>

<style lang="postcss">
	.qr-line {
		background: linear-gradient(180deg, rgb(132, 204, 21) 85%, rgba(255, 0, 0, 0.9));
		&:nth-child(even) {
			transform: scale(-1) translateY(15%);
		}
	}
</style>
