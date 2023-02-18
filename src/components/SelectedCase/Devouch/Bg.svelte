<script lang="ts">
	export let active = false;
</script>

<div class="pic pic-large">
	<div class="coffee" class:active />
</div>

<style lang="postcss">
	.pic.pic-large .coffee {
		background: linear-gradient(45deg, rgb(24 125 138) 45%, rgb(24 125 138) 50%),
			url(/src/assets/project/coffee-pattern-1.png);
		background-size: 100% 100%, 50% !important;
	}

	.pic {
		position: absolute;
		left: -50%;
		right: 0;
		top: -50%;
		bottom: 0;
		.coffee {
			opacity: 0;
			transform: rotate(25deg) scale(1.5);
			transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease;

			width: 120%;
			height: 120%;
			background: linear-gradient(45deg, rgb(0 165 93) 45%, rgb(24 125 138) 50%),
				url(/src/assets/project/coffee-pattern-1.png);
			background-blend-mode: overlay, color-dodge;
			background-position: center;
			background-size: 100% 100%, 25%;

			&.active {
				opacity: 1;
				transform: scale(1);
			}
		}
	}
</style>
