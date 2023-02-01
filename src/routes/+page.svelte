<script lang="ts">
	import Matter from 'matter-js';
	import { onMount } from 'svelte';
	import JSLogo from '../assets/tech/javascript.svg';
	import ReactLogo from '../assets/tech/react.svg';
	import ScssLogo from '../assets/tech/scss.svg';
	import TSLogo from '../assets/tech/typescript.svg';
	import ProjectCard from '../components/ProjectCard.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	const listProject = [
		{
			title: 'Foodelive',
			role: 'Frontend developer',
			description:
				"Whether you're ordering food for two or hosting a party for thousands people, you will always find the best menu and service that's right for you.",
			bg: 'bg-red-500'
		},
		{
			title: 'Devouch',
			role: 'Frontend developer',
			description: 'Spend wise time to get the voucher you deserve no matter where you are',
			bg: 'bg-lime-500'
		},
		{
			title: 'Sudoku',
			role: 'Frontend developer',
			description: 'Spend wise time to get the voucher you deserve no matter where you are',
			bg: 'bg-teal-500'
		},
		{
			title: 'ELearning',
			role: 'Frontend developer',
			description: 'Spend wise time to get the voucher you deserve no matter where you are',
			bg: 'bg-sky-500'
		}
	];

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
	let container: HTMLDivElement;
	let card: HTMLDivElement;
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.content-item', {
			scrollTrigger: {
				scroller: '#page',
				trigger: '.content-item',
				start: 'top center',
				markers: true,
				toggleActions: 'restart pause reverse pause'
			},
			x: 400,
			duration: 3
		});

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
		const engine = Engine.create();
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
		render.mouse = mouse;
		Composite.add(engine.world, [leftWall, rightWall, ground].concat(getTech()));
		Render.run(render);
		const runner = Runner.create();
		Runner.run(runner, engine);
	});
</script>

<section class="grid grid-cols-5 grid-rows-2 gap-10">
	<div class="row-start-1 row-span-2 col-start-1 col-span-5 header-right" bind:this={container} />
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
	{#each listProject as item, idx}
		{@const isOdd = idx % 2 == 1}
		<div
			bind:this={card}
			class:isOdd
			class="content-item grid grid-cols-2 prose rounded-3xl overflow-hidden"
		>
			<div class:col-start-2={isOdd} class="row-start-1">
				<ProjectCard title={item.title} role={item.role} description={item.description} />
			</div>
			<div class:col-start-1={isOdd} class={`${item.bg} row-start-1`} />
		</div>
	{/each}
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

<style lang="postcss">
	.content-item {
		position: relative;
	}
	.content-item::before {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		height: 100%;
		width: 2px;
		background-color: black;
		z-index: 10;
	}
	.content-item {
		border: 2px solid black;
		border-top: none;
	}
</style>
