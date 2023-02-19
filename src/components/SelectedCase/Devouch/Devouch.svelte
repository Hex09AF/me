<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Bg from './Bg.svelte';
	import Button from './Button.svelte';
	import Tear from './Tear.svelte';

	let active = false;

	let tl: gsap.core.Tween;
	let tlQr: gsap.core.Tween;
	let tlQrPrint: gsap.core.Timeline;
	let tlRotate: gsap.core.Tween;
	let tlRemove: gsap.core.Timeline;
	let tlUpdate: gsap.core.Timeline;

	onMount(() => {
		tl = gsap.from('.voucher-text', {
			paused: true,
			opacity: 0,
			xPercent: 100,
			duration: 0.25,
			stagger: 0.075,
			ease: 'power1.inOut'
		});
		const eles = gsap.utils.toArray('.qr-line');
		tlQrPrint = gsap.timeline({ paused: true });
		eles.forEach((qrLine: any, i) => {
			tlQrPrint.add(
				gsap.to(qrLine, {
					yPercent: i % 2 ? 105 : -105
				})
			);
		});

		tlQr = gsap.from('#qrImage', {
			paused: true,
			opacity: 1,
			duration: 0.25
		});

		tlRotate = gsap.to('.voucher-c', {
			paused: true,
			rotateY: 180,
			duration: 1,
			ease: 'none'
		});
		tlRemove = gsap.timeline({ paused: true });
		tlRemove
			.to('.voucher-scale', { scale: 0.7 })
			.to('.voucher-w-l', { rotate: -30, rotateX: -25 })
			.to('.voucher-w-r', { rotate: 30, rotateX: 25 }, '<')
			.to('.voucher-rotate', { rotateY: 360, yPercent: 100, duration: 2 }, '-=0.25');
		tlUpdate = gsap.timeline({ paused: true });
		tlUpdate
			.to('.voucher-w-l', {
				width: '50%'
			})
			.to(
				'.voucher-w-r',
				{
					width: 0
				},
				'<'
			);
	});

	function activeBG() {
		if (active) {
			tl.reverse();
			tlQr.reverse();
			tlQrPrint.seek(0).pause();
		} else {
			tl.seek(0).restart();
			tlQr.seek(0).play();
			tlQrPrint.seek(0).play();
		}
		active = !active;
	}

	function rotate() {
		if (tlRotate.isActive() || tlRotate.progress() === 1) {
			tlRotate.reverse();
		} else {
			tlRotate.play();
		}
	}
	function remove() {
		if (tlRemove.isActive() || tlRemove.progress() === 1) {
			tlRemove.reverse();
		} else {
			tlRemove.play();
		}
	}
	function update() {
		if (tlUpdate.isActive() || tlUpdate.progress() === 1) {
			tlUpdate.reverse();
		} else {
			tlUpdate.play();
		}
	}
</script>

<div class="devouche-c">
	<div class="voucher-c" class:active>
		<div class="voucher-scale">
			<div class="voucher-rotate voucher-rotate-l">
				<div class="voucher-w voucher-w-l">
					<div class="voucher-l">
						<Bg {active} />
						<h2 class="p-2 flex items-center tracking-[-0.5em] voucher-text">
							<span class="text-8xl"> - </span>
							<span class="text-9xl"> 10 </span>
							<span class="text-7xl ml-2">%</span>
						</h2>
					</div>
					<div class="voucher-circle-c voucher-circle-c-l">
						<div class="voucher-circle" />
					</div>
					<ul class="voucher-cut voucher-cut-l">
						{#each new Array(20).fill(0) as item}
							<li />
						{/each}
					</ul>
				</div>
			</div>
			<div class="voucher-rotate voucher-rotate-r">
				<div class="voucher-w voucher-w-r">
					<div class="voucher-r">
						<Bg {active} />
						<Tear />
					</div>
					<div class="voucher-circle-c voucher-circle-c-r">
						<div class="voucher-circle" />
					</div>
					<ul class="voucher-cut voucher-cut-r">
						{#each new Array(20).fill(0) as item}
							<li />
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="absolute bottom-0 flex w-full justify-center gap-4 p-4">
		<Button handleClick={activeBG} text="C" />
		<Button handleClick={rotate} text="R" />
		<Button handleClick={update} text="U" />
		<Button handleClick={remove} text="D" />
	</div>
</div>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

	.devouche-c {
		@apply h-full p-4;
	}

	.voucher {
		&-c {
			@apply will-change-transform origin-center mx-auto relative w-[90%] h-[200px] flex justify-center items-center;
			transform-style: preserve-3d;
			perspective: 600px;
		}
		&-scale {
			@apply will-change-transform h-full w-full flex items-center justify-center;
			transform-style: preserve-3d;
		}
		&-rotate {
			@apply will-change-transform h-full;
			transform-style: preserve-3d;
			&-l {
				@apply w-[70%] origin-[30%];
			}
			&-r {
				@apply w-[30%] origin-[70%];
			}
		}

		&-w {
			@apply h-full relative overflow-hidden;
			transform-style: preserve-3d;
			&-l {
				@apply origin-[100%_100%] ml-auto;
			}
			&-r {
				@apply -ml-[1px] origin-[0%_100%] mr-auto;
			}
		}

		&-l,
		&-r {
			@apply w-full h-full relative border border-dashed;
		}

		&-circle {
			@apply relative h-full;
			&-c {
				@apply absolute w-[32px] h-full top-0;
				&-l {
					@apply translate-x-1/2 right-[1px];
				}
				&-r {
					@apply -translate-x-1/2 -left-[1px];
				}
			}
			&::after,
			&::before {
				content: '';
				@apply block bg-lime-500 absolute w-[32px] h-[32px] rounded-full border border-dashed;
			}
			&::after {
				@apply -top-[20px];
			}
			&::before {
				@apply -bottom-[20px];
			}
		}
	}

	.voucher-c.active {
		.voucher {
			&-w-r {
				@apply ml-0;
			}
			&-l,
			&-r {
				@apply border-none;
			}
			&-circle {
				&::after,
				&::before {
					@apply border-none;
				}
			}
		}
		.voucher-cut {
			@apply visible;
		}
	}
	.voucher-cut {
		@apply top-[3px] absolute flex flex-col gap-2 invisible;
		li {
			@apply w-[4px] h-[4px] rounded-full bg-lime-500;
		}
		&-l {
			@apply -right-[0px] translate-x-1/2;
		}
		&-r {
			@apply -left-[0px] -translate-x-1/2;
		}
	}
	h2 {
		font-family: 'Bebas Neue', cursive;
	}
</style>
