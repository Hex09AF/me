<script lang="ts">
	import Matter from 'matter-js';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import Fresh from '../assets/fresh.png';
	import JSLogo from '../assets/tech/javascript.svg';
	import ReactLogo from '../assets/tech/react.svg';
	import ScssLogo from '../assets/tech/scss.svg';
	import TSLogo from '../assets/tech/typescript.svg';
	import ProjectCard from '../components/ProjectCard.svelte';
	let info = spring(
		{ rotate: -25 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
	const listTech = [
		{
			title: 'Sass/Scss',
			img: ScssLogo
		},
		{
			title: 'React',
			img: ReactLogo
		},
		{
			title: 'Javscript',
			img: JSLogo
		},
		{
			title: 'Typescript',
			img: TSLogo
		}
	];

	let cup: HTMLImageElement;
	let container: HTMLDivElement;
	onMount(() => {
		// module aliases
		const rectContainer = container.getBoundingClientRect();
		let { width, height } = rectContainer;
		width -= 32;
		height -= 32;
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
				width: width,
				height: height,
				pixelRatio: 1,
				background: 'transparent',
				wireframes: false
			}
		});

		// create two boxes and a ground
		const getTech = () => {
			return listTech.map((tech) =>
				Bodies.circle(400, 200, 30, {
					render: {
						sprite: {
							texture: tech.img,
							xScale: 0.3,
							yScale: 0.3
						}
					}
				})
			);
		};
		const boundaryOptions = {
			isStatic: true,
			render: {
				fillStyle: 'transparent',
				strokeStyle: 'transparent'
			}
		};
		const ground = Bodies.rectangle(width / 2, height, width, 32, {
			isStatic: true,
			render: {
				fillStyle: 'transparent',
				strokeStyle: 'transparent'
			}
		});
		const leftWall = Bodies.rectangle(0, height / 2, 32, height, boundaryOptions);
		const rightWall = Bodies.rectangle(width, height / 2, 32, height, boundaryOptions);

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

		const eventMouseWheel = mouseConstraint.mouse.mousewheel;
		mouseConstraint.mouse.element.removeEventListener('mousewheel', eventMouseWheel);
		mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', eventMouseWheel);

		Composite.add(engine.world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		// add all of the bodies to the world
		Composite.add(engine.world, [leftWall, rightWall, ground].concat(getTech()));

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
		<div class="revert-text" />
	</div>
	<div class="row-start-2 col-start-4 col-span-2 header-bottom-right">
		<div class="revert-text" />
	</div>
	<div class="row-start-1 col-start-4 col-span-2 header-top-right">
		<div class="revert-text" />
	</div>
</section>

<section class="my-10">
	<div class="wrap">
		{#each [1, 2] as item, idx}
			<div class="item">
				<div class="wrap-item">
					<div class="grid grid-cols-2 prose rounded-3xl overflow-hidden">
						{#if idx % 2 === 0}
							<ProjectCard />
						{:else}
							<div class="bg-red-400">
								<h2>.</h2>
							</div>
						{/if}
						{#if idx % 2 === 0}
							<div class="bg-red-400">
								<h2>.</h2>
							</div>
						{:else}
							<ProjectCard />
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="grid grid-cols-2 gap-10 mt-10">
	<h1>Selected case</h1>
	<div>
		<ul>
			<li class="group relative weird">
				<h2>Sudoku</h2>
				<div class="btn-primary">
					<img src={ReactLogo} alt="React" />
					<img src={TSLogo} alt="Typescript" />
					<img src={JSLogo} alt="Javscript" />
				</div>
				<div class="marquee">Remix Node React Prisma</div>
			</li>
			<li class="group relative weird">
				<h2>Sudoku</h2>
				<div class="btn-primary">
					<img src={ReactLogo} alt="React" />
					<img src={TSLogo} alt="Typescript" />
					<img src={JSLogo} alt="Javscript" />
				</div>
				<div class="marquee">Remix Node React Prisma</div>
			</li>
			<li class="group relative weird">
				<h2>Sudoku</h2>
				<div class="btn-primary">
					<img src={ReactLogo} alt="React" />
					<img src={TSLogo} alt="Typescript" />
					<img src={JSLogo} alt="Javscript" />
				</div>
				<div class="marquee">Remix Node React Prisma</div>
			</li>
			<li class="group relative weird">
				<h2>Sudoku</h2>
				<div class="btn-primary">
					<img src={ReactLogo} alt="React" />
					<img src={TSLogo} alt="Typescript" />
					<img src={JSLogo} alt="Javscript" />
				</div>
				<div class="marquee">Remix Node React Prisma</div>
			</li>
			<li class="group relative weird">
				<h2>Sudoku</h2>
				<div class="btn-primary">
					<img src={ReactLogo} alt="React" />
					<img src={TSLogo} alt="Typescript" />
					<img src={JSLogo} alt="Javscript" />
				</div>
				<div class="marquee">Remix Node React Prisma</div>
			</li>
		</ul>
	</div>
</section>
