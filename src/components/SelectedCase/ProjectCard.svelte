<script lang="ts">
	export let title: string = '';
	export let role: string[] = [''];
	export let description: string = '';
	export let marqueeBg: string = '';
	export let onDetail: any;
</script>

<div class={`project-card p-8 md:p-10 bg-white text-black isolate h-full`}>
	<div class="playful-c relative" aria-haspopup="true" role="button" tabindex="0">
		<div class="playful absolute text-lg font-bold" aria-label="Name">
			<span aria-hidden="true">N</span>
			<span aria-hidden="true">a</span>
			<span aria-hidden="true">m</span>
			<span aria-hidden="true">e</span>
		</div>
		<h2 class="project-title text-5xl md:text-8xl uppercase mb-2 bg-white">
			{title}
		</h2>
	</div>

	<div class="playful-c relative mt-5 md:mt-6" aria-haspopup="true" role="button" tabindex="0">
		<div class="playful absolute right-0 top-0 text-lg font-bold" aria-label="Keywords">
			<span aria-hidden="true">K</span>
			<span aria-hidden="true">e</span>
			<span aria-hidden="true">y</span>
			<span aria-hidden="true">w</span>
			<span aria-hidden="true">o</span>
			<span aria-hidden="true">r</span>
			<span aria-hidden="true">d</span>
			<span aria-hidden="true">s</span>
		</div>
		<div class="text-2xl md:text-3xl mb-2 text-white bg-white">
			<div class={`marquee -mx-8 md:-mx-10 py-1 md:py-2 ${marqueeBg}`}>
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
	</div>

	<div class="playful-c relative mt-5 md:mt-6" aria-haspopup="true" role="button" tabindex="0">
		<div class="playful absolute top-0 text-lg font-bold" aria-label="Description">
			<span aria-hidden="true">D</span>
			<span aria-hidden="true">e</span>
			<span aria-hidden="true">s</span>
			<span aria-hidden="true">c</span>
			<span aria-hidden="true">r</span>
			<span aria-hidden="true">i</span>
			<span aria-hidden="true">p</span>
			<span aria-hidden="true">t</span>
			<span aria-hidden="true">i</span>
			<span aria-hidden="true">o</span>
			<span aria-hidden="true">n</span>
		</div>
		<p class="text-base md:text-xl bg-white">{description}</p>
	</div>
</div>

<style lang="postcss">
	.playful-c {
		cursor: auto;
	}
	.playful-c:active,
	.playful-c:hover {
		.playful {
			transform: translateY(-80%);
		}
	}

	.playful span {
		color: var(--text);
		text-shadow: 2.25px 2.25px var(--shadow), 2px 2px var(--shadow), 1.75px 1.75px var(--shadow),
			1.5px 1.5px var(--shadow), 1.25px 1.25px var(--shadow), 1px 1px var(--shadow),
			0.75px 0.75px var(--shadow), 0.5px 0.5px var(--shadow), 0.25px 0.25px var(--shadow);
	}

	.playful span:nth-child(2n) {
		--text: #ed625c;
		--shadow: #f2a063;
	}
	.playful span {
		position: relative;
		--text: #5362f6;
		--shadow: #e485f8;
	}

	.playful span:nth-child(3n) {
		--text: #ffd913;
		--shadow: #6ec0a9;
	}

	.playful span:nth-child(5n) {
		--text: #555bff;
		--shadow: #e485f8;
	}

	.playful span:nth-child(7n),
	.playful span:nth-child(11n) {
		--text: #ff9c55;
		--shadow: #ff5555;
	}

	.playful {
		opacity: 0.7;
		z-index: -1;
		transform: translateY(-50%);
		transition: 1s transform cubic-bezier(0.165, 0.84, 0.44, 1);
		text-transform: uppercase;
		text-align: center;
	}

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
