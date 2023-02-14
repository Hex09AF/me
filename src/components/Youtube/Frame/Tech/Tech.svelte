<script lang="ts">
	import Matter from 'matter-js';
	import { onMount } from 'svelte';
	import JSLogo from '../../../../assets/tech/javascript.svg';
	import ReactLogo from '../../../../assets/tech/react.svg';
	import ScssLogo from '../../../../assets/tech/scss.svg';
	import TSLogo from '../../../../assets/tech/typescript.svg';

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

	onMount(() => {
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

<div class="w-full h-full" bind:this={container} />
