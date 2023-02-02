<script lang="ts">
	export let title: string = '';
	export let role: string = '';
	export let description: string = '';

	const marqueeRole = new Array(10)
		.fill(0)
		.map(() => role)
		.join(' • ');
</script>

<div class="p-10 bg-white text-black isolate">
	<h2 class="text-7xl uppercase mb-2">{title}</h2>
	<div class="text-2xl mb-2 mix-blend-difference text-white">
		<div class="marquee absolute">
			<div class="marquee-inner">
				<span class="marquee-left"> {marqueeRole} {' • '}</span>
				<span class="marquee-right"> {marqueeRole} {' • '}</span>
			</div>
		</div>
	</div>
	<p class="mb-6 mt-12">
		{description}
	</p>
	<button class="btn variant-filled-primary btn-base btn-marquee">
		<div class="btn-marquee-inner">
			<span data-text="See the detail"> See the detail </span>
		</div>
	</button>
</div>

<style>
	.btn-marquee:hover .btn-marquee-inner span:after {
		opacity: 1;
	}
	.btn-marquee .btn-marquee-inner span:after {
		content: attr(data-text);
		position: absolute;
		display: inline-block;
		width: 100%;
		left: 120%;
		opacity: 0;
	}

	.btn-marquee:hover div {
		transform: translateX(0);
		animation: btn_marquee 2s linear infinite;
		animation-play-state: running;
	}

	@keyframes btn_marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-120%);
		}
	}

	.marquee {
		left: 0;
		background: rgb(254 237 0 / 0.3);
	}

	.marquee .marquee-inner {
		display: flex;
		flex-wrap: nowrap;

		position: relative;
	}

	.marquee .marquee-inner span {
		white-space: nowrap;
		transform: translate3d(0, 0, 0);
	}
	.marquee .marquee-inner span.marquee-right {
		transform: translate3d(0, 0, 0);

		animation-name: marquee_right;
		animation-duration: 50s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	.marquee .marquee-inner span.marquee-left {
		animation-name: marquee_left;
		animation-duration: 50s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@keyframes marquee_left {
		0% {
			transform: translate3d(0%, 0, 0);
		}
		100% {
			transform: translate3d(-100%, 0, 0);
		}
	}
	@keyframes marquee_right {
		0% {
			transform: translate3d(0%, 0, 0);
		}
		100% {
			transform: translate3d(-100%, 0, 0);
		}
	}
</style>
