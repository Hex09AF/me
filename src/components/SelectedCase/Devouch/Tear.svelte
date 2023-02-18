<script>
	import Qr from './Qr.svelte';
</script>

<div class="voucher-tear">
	<div class="flex items-center">
		<div class="flex-1">
			<div class="voucher-message">
				<div class="voucher-text">Coffee</div>
			</div>

			<div class="voucher-message">
				<div class="voucher-text">House</div>
			</div>

			<div class="text-sm overflow-hidden">
				<div class="voucher-text">Voucher</div>
			</div>
		</div>

		<Qr />
	</div>
</div>

<style lang="postcss">
	.voucher-message {
		@apply font-bold text-xl leading-none overflow-hidden;
	}
	.voucher-tear {
		@apply absolute uppercase h-full p-4 right-[5%] rotate-180;
		writing-mode: vertical-rl;
		text-orientation: sideways;
	}
</style>
