<script lang="ts">
	import Fresh from '../assets/fresh.png';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import Matter from 'matter-js';
	let info = spring(
		{ rotate: -25 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
	// info.set({ rotate: 25 });
	// setTimeout(() => {
	// 	info.set({ rotate: -25 });
	// }, 100);
	// setTimeout(() => {
	// 	info.set({ rotate: 25 });
	// }, 200);
	let cup: HTMLImageElement;
	let container: HTMLDivElement;
	onMount(() => {
		// module aliases
		const rectContainer = container.getBoundingClientRect();
		const { width, height } = rectContainer;
		const Engine = Matter.Engine,
			Render = Matter.Render,
			Runner = Matter.Runner,
			Bodies = Matter.Bodies,
			Composite = Matter.Composite,
			Mouse = Matter.Mouse,
			MouseConstraint = Matter.MouseConstraint;

		// create an engine
		const engine = Engine.create();

		// create a renderer
		const render = Render.create({
			element: container,
			engine: engine,
			options: {
				width: width - 24,
				height: height - 24,
				background: 'transparent',
				wireframes: false
			}
		});

		// create two boxes and a ground
		const boxA = Bodies.rectangle(400, 200, 80, 80, {
			render: {
				sprite: {
					texture: 'https://static-cdn.jtvnw.net/emoticons/v1/301299185/2.0',
					xScale: 1,
					yScale: 1
				}
			}
		});
		const boxB = Bodies.rectangle(450, 50, 80, 80);
		const boundaryOptions = {
			isStatic: true
		};
		const ground = Bodies.rectangle(width / 2, height - 24, width, 8, boundaryOptions);
		const leftWall = Bodies.rectangle(0, height / 2, 4, height, boundaryOptions);
		const rightWall = Bodies.rectangle(width, height / 2, 4, height, boundaryOptions);

		// add mouse control
		var mouse = Mouse.create(render.canvas),
			mouseConstraint = MouseConstraint.create(engine, {
				mouse: mouse,
				constraint: {
					stiffness: 0.2,
					render: {
						visible: false
					}
				}
			});

		Composite.add(engine.world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		// add all of the bodies to the world
		Composite.add(engine.world, [boxA, boxB, leftWall, rightWall, ground]);

		// run the renderer
		Render.run(render);

		// create runner
		const runner = Runner.create();

		// run the engine
		Runner.run(runner, engine);

		const fn = (e: MouseEvent) => {
			const rect = cup.getBoundingClientRect();
			const absolute = {
				x: e.clientX - rect.left
			};
			info.set({ rotate: (absolute.x * -25) / -rect.left });
		};
		window.addEventListener('mousemove', fn);
		return () => window.removeEventListener('mousemove', fn);
	});

	$: dynamicStyles = `
    --rotate: ${$info.rotate}deg;
	`;
</script>

<section class="grid grid-cols-5 grid-rows-2 gap-10">
	<div class="row-start-1 row-span-2 col-start-1 col-span-5 header-right" bind:this={container}>
		<div class="fresh-mind">
			<img bind:this={cup} style={dynamicStyles} src={Fresh} alt="fresh" />
		</div>
	</div>
	<div class="row-start-1 col-start-1 col-span-2 header-left flex items-center">
		<h1 class="header-main-line revert-text">
			<span class="text-5xl block font-bold deep">YOU</span>
			<span class="main-line text-6xl block font-bold">YEAH YOU</span>
			<p class="block main-line">
				<span class="text-3xl font-bold">I'm Hex</span>, a web developer from Vietnam
			</p>
			<p>Welcome to my base. Let's travel through this together, will ya.</p>
		</h1>
		<!-- Add some effect "you" like bear ears, colors text, there must be something that i like, i love, ... do it -->
	</div>
	<div class="row-start-2 col-start-1 col-span-2 header-bottom-left">
		<div class="revert-text">Hello</div>
	</div>
</section>
