<script lang="ts">
	import Matter, { Pair } from 'matter-js';
	import { onMount } from 'svelte';
	import JSLogo from '../../../../assets/tech/javascript.svg';
	import ReactLogo from '../../../../assets/tech/react.svg';
	import ScssLogo from '../../../../assets/tech/scss.svg';
	import TSLogo from '../../../../assets/tech/typescript.svg';
	import { chatMessage } from '../../../../store/chat';
	import randBetween from '../../../../utils/rand';

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
		height -= 32;
		const Engine = Matter.Engine,
			Render = Matter.Render,
			Runner = Matter.Runner,
			Events = Matter.Events,
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
					restitution: 0.5,
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

		const yRatio = height / 5;

		const obstacles = [1, 2, 3, 4]
			.map((v) => {
				const length = v % 2 == 0 ? 6 : 7;
				const xRatio = width / 7;
				const rows = new Array(length).fill(0).map((_, i) => {
					return Bodies.circle(xRatio * (i + 1) - (v % 2 ? xRatio / 2 : 0), yRatio * v, 10, {
						isStatic: true,
						render: {
							fillStyle: 'gray'
						}
					});
				});
				return rows;
			})
			.flat();

		const ssRatio = width / 5;
		const sensors = [1, 2, 3, 4, 5].map((v, i) =>
			Bodies.rectangle(i * ssRatio + ssRatio / 2, height - 32, ssRatio, 32, {
				isStatic: true,
				isSensor: true,
				render: {
					fillStyle: 'transparent'
				}
			})
		);

		const eventMouseWheel = mouseConstraint.mouse.mousewheel;
		mouseConstraint.mouse.element.removeEventListener('mousewheel', eventMouseWheel);
		mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', eventMouseWheel);
		Composite.add(engine.world, mouseConstraint);
		render.mouse = mouse;
		Composite.add(
			engine.world,
			[leftWall, rightWall, ground].concat(sensors).concat(getTech()).concat(obstacles)
		);
		Render.run(render);
		const runner = Runner.create();
		Runner.run(runner, engine);

		const colors = [
			'#fe918c',
			'#fbc294',
			'#f7da91',
			'#ebf991',
			'#90f6c8',
			'#91d1f9',
			'#b192f8',
			'#fd949c'
		];

		Events.on(engine, 'collisionStart', function (event) {
			var pairs = event.pairs;

			for (var i = 0, j = pairs.length; i != j; ++i) {
				var pair = pairs[i];
				if (pair.bodyA === sensors[0] || pair.bodyB === sensors[0]) {
					chatMessage.nicePoint();
				}
				if (obstacles.some((v) => v === pair.bodyA)) {
					const color = colors[randBetween(0, colors.length - 1)];
					pair.bodyA.render.fillStyle = color;
				}
				if (obstacles.some((v) => v === pair.bodyB)) {
					const color = colors[randBetween(0, colors.length - 1)];
					pair.bodyB.render.fillStyle = color;
				}
			}
		});

		Events.on(engine, 'collisionEnd', function (event) {
			var pairs = event.pairs;

			for (var i = 0, j = pairs.length; i != j; ++i) {
				var pair = pairs[i];
			}
		});
	});
</script>

<div class="w-full h-full" bind:this={container} />
