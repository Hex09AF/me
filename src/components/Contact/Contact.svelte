<section>
	<div>LET'S CONNECT</div>

	<span class="glow inline-flex items-center gap-5 p-4 rounded-2xl">
		<div>Logo</div>
		<div class="flex flex-col justify-center items-center">
			<div class="uppercase text-xl">Listen on spotify</div>
			<div class="uppercase text-xs">Link in the descrition</div>
		</div>
	</span>
</section>

<style lang="postcss" global>
	.glow {
		&::after {
			background-color: #fff;
		}
	}
	.dark .glow {
		&::after {
			background-color: #000;
		}
	}
	.glow {
		position: relative;
		&::before {
			content: '';
			background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);
			filter: blur(8px);
			position: absolute;
			top: -2px;
			left: -2px;
			width: calc(100% + 4px);
			height: calc(100% + 4px);
			z-index: -1;
			border-radius: 12px;
		}
		&::after {
			box-shadow: 0 0 4px #fff;
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			border-radius: 8px;
		}
	}
</style>
