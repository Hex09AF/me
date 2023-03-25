<script lang="ts">
	import Matter from 'matter-js';
	import { onMount } from 'svelte';
	import { chatMessage } from '../../../../store/chat';
	import { BOUNDARY_OTIONS, HEIGHT_MARGIN, LIST_TECH } from '../../../../utils/constants/matter';
	import randBetween from '../../../../utils/rand';

	let container: HTMLDivElement;

	onMount(() => {
		const rectContainer = container.getBoundingClientRect();
		let { width, height } = rectContainer;
		height -= HEIGHT_MARGIN;

		const { Engine, Render, Runner, Events, Bodies, Composite, Mouse, MouseConstraint } = Matter;

		const engine = Engine.create();

		const render = Render.create({
			element: container,
			engine: engine,
			options: {
				width,
				height,
				pixelRatio: 1,
				background: 'transparent',
				wireframes: false
			}
		});

		const runner = Runner.create();

		const mouse = Mouse.create(render.canvas);
		const mouseConstraint = MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false
				}
			}
		});
		// @ts-ignore
		const eventMouseWheel = mouseConstraint.mouse.mousewheel;
		mouseConstraint.mouse.element.removeEventListener('mousewheel', eventMouseWheel);
		mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', eventMouseWheel);

		const ground = Bodies.rectangle(width / 2, height, width, HEIGHT_MARGIN, BOUNDARY_OTIONS);
		const leftWall = Bodies.rectangle(0, height / 2, HEIGHT_MARGIN, height, BOUNDARY_OTIONS);
		const rightWall = Bodies.rectangle(width, height / 2, HEIGHT_MARGIN, height, BOUNDARY_OTIONS);

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
			Bodies.rectangle(i * ssRatio + ssRatio / 2, height - HEIGHT_MARGIN, ssRatio, 32, {
				isStatic: true,
				isSensor: true,
				render: {
					fillStyle: 'transparent'
				}
			})
		);

		const techs = LIST_TECH.map((tech) =>
			Bodies.circle(randBetween(0, width), 0, 30, {
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

		Composite.add(engine.world, mouseConstraint);
		Composite.add(
			engine.world,
			[leftWall, rightWall, ground].concat(sensors).concat(techs).concat(obstacles)
		);

		Render.run(render);
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
	});
</script>

<div class="w-full h-full" bind:this={container} />
