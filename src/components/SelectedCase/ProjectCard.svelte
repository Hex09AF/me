<script lang="ts">
	export let title: string = '';
	export let role: string[] = [''];
	export let description: string = '';
	export let marqueeBg: string = '';
	export let onDetail: any;
</script>

<div class={`p-8 md:p-10 bg-white text-black isolate min-h-[400px] h-full`}>
	<h2 class="project-title text-5xl md:text-8xl uppercase mb-2">{title}</h2>

	<div class="text-3xl mb-2 text-white">
		<div class={`marquee -mx-8 md:-mx-10 py-2 ${marqueeBg}`}>
			<div class="marquee-inner whitespace-pre">
				<span class="marquee-c marquee-left">
					{#each role as item}
						<span class="marquee-i mx-2">{item}</span>
					{/each}
				</span>

				<span class="marquee-c marquee-right">
					{#each role as item}
						<span class="marquee-i mx-2">{item}</span>
					{/each}
				</span>
			</div>
		</div>
	</div>

	<p class="text-xl">{description}</p>
	<!-- <button on:click={onDetail} class="btn variant-filled-primary btn-base btn-marquee">
		<div class="btn-marquee-inner">
			<span data-text="See the detail"> See the detail </span>
		</div>
	</button> -->
</div>

<style lang="postcss">
	.project-title {
		font-family: 'Oswald', cursive;
		font-weight: 600;
	}
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
	}

	.marquee .marquee-inner {
		display: flex;
		flex-wrap: nowrap;

		position: relative;
	}

	.marquee .marquee-inner .marquee-c {
		white-space: nowrap;
		transform: translate3d(0, 0, 0);
	}
	.marquee .marquee-inner .marquee-c.marquee-right {
		animation-name: marquee_right;
		animation-duration: 50s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	.marquee .marquee-inner .marquee-c.marquee-left {
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
	.marquee-c {
		font-weight: 500;
	}
	.marquee-left .marquee-i:nth-child(odd) {
		color: transparent;
		-webkit-text-stroke: 1.5px black;
	}
	.marquee-right .marquee-i:nth-child(even) {
		color: transparent;
		-webkit-text-stroke: 1.5px black;
	}
</style>
