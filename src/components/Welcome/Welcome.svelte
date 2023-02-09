<script>
	import CircleText from './CircleText.svelte';
</script>

<section class="z-20 uppercase font-bold leading-[1]">
	<div id="welcome-wrapper" class="relative h-screen overflow-hidden">
		<section id="section-welcome" class="w-full h-full absolute flex flex-col justify-center">
			<div
				id="circle-welcome"
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 "
			/>
			<div id="fs-welcome" class="welcome text-center w-full text-[17vw] text-red-600">Welcome</div>
			<div id="sc-welcome" class="welcome text-center w-full text-[17vw]">Welcome</div>
			<div id="tr-welcome" class="welcome text-center w-full text-[17vw] text-zinc-800">
				Welcome
			</div>
		</section>

		<section id="section-name" class="w-full h-full absolute flex flex-col justify-center">
			<div id="circle-name" class="absolute rounded-full bg-indigo-500 p-[50%]" />
			<div id="fs-name" class="name text-center w-full text-[17vw] text-indigo-600">Quoc Huy</div>
			<div id="sc-name" class="name text-center w-full text-[17vw]">Quoc Huy</div>
			<div id="tr-name" class="name text-center w-full text-[17vw] text-zinc-800">Quoc Huy</div>
		</section>

		<section id="section-text" class="absolute top-0 w-full h-full">
			<div
				id="circle-text"
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500"
			/>
			<div class="relative w-full h-full">
				<div
					id="fs-text"
					class="origin-center opacity-0 w-[25vw] h-[25vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText fillColor="fill-amber-600" />
				</div>
				<div
					id="sc-text"
					class="origin-center opacity-0 w-[55vw] h-[55vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText />
				</div>
				<div
					id="tr-text"
					class="origin-center opacity-0 w-[90vw] h-[90vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText fillColor="fill-amber-600" />
				</div>
				<div
					id="qd-text"
					class="origin-center opacity-0 w-[150vw] h-[150vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<CircleText />
				</div>
			</div>
		</section>
	</div>
</section>

<style>
	#fs-welcome,
	#tr-welcome {
		transform: translate3d(-100%, 0, 0);
	}
	#sc-welcome {
		transform: translate3d(100%, 0, 0);
	}
	#circle-name {
		transform: translate3d(-100%, 0, 0);
	}

	#fs-name,
	#sc-name,
	#tr-name {
		transform: translate3d(-100%, 0, 0);
	}
</style>
