<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import qrImg from '../../../assets/project/qr.png';
	import Button from './Button.svelte';

	let active = false;

	let tl: gsap.core.Tween;
	let tlQr: gsap.core.Tween;
	let tlQrPrint: gsap.core.Timeline;
	let tlRotate: gsap.core.Tween;
	let tlRemove: gsap.core.Timeline;
	let tlUpdate: gsap.core.Timeline;

	onMount(() => {
		tl = gsap.from('.animation-text', {
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

		tlRotate = gsap.to('.voucher-container', {
			paused: true,
			rotateY: 180,
			duration: 1,
			ease: 'none'
		});
		tlRemove = gsap.timeline({ paused: true });
		tlRemove
			.to('.voucher-scale', {
				scale: 0.7
			})
			.to('.voucher-card-c', {
				rotate: -30
			})
			.to(
				'.voucher-card-tear-c',
				{
					rotate: 30
				},
				'<'
			);
		tlUpdate = gsap.timeline({ paused: true });
		tlUpdate
			.to('.voucher-card-c', {
				width: '50%'
			})
			.to(
				'.voucher-card-tear-c',
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

<div class="devouche-c h-full p-3">
	<div class="voucher-container">
		<div class="voucher-scale">
			<div class="voucher-card-c">
				<div class="voucher-card flex">
					<div class="pic">
						<div class="coffee" class:active />
					</div>
					<h2 class="p-2 flex items-center tracking-[-0.5em] animation-text">
						<span class="text-8xl"> - </span>
						<span class="text-9xl"> 10 </span>
						<span class="text-7xl ml-2">%</span>
					</h2>
				</div>
			</div>
			<div class="voucher-card-tear-c">
				<div class="voucher-card-tear">
					<ul>
						{#each new Array(20).fill(0) as item}
							<li />
						{/each}
					</ul>
					<div class="pic pic-large">
						<div class="coffee" class:active />
					</div>
					<div class="voucher-half absolute uppercase h-full p-4">
						<div class="flex items-center">
							<div class="flex-1">
								<div class="font-bold text-xl leading-none overflow-hidden">
									<div class="animation-text">Coffee</div>
								</div>
								<div class="font-bold text-xl leading-none overflow-hidden">
									<div class="animation-text">House</div>
								</div>
								<div class="text-sm overflow-hidden"><div class="animation-text">Voucher</div></div>
							</div>
							<div class="relative overflow-hidden">
								<img
									id="qrImage"
									src={qrImg}
									alt="qr"
									width="80"
									height="80"
									class="rotate-90 origin-center"
								/>
								<div class="absolute w-[full] h-[120%] left-0">
									{#each new Array(20).fill(0) as item}
										<div class="qr-line h-full w-[4px]" />
									{/each}
								</div>
							</div>
						</div>
					</div>
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
	.pic.pic-large .coffee {
		background: linear-gradient(45deg, rgb(24 125 138) 45%, rgb(24 125 138) 50%),
			url(/src/assets/project/coffee-pattern-1.png);
		background-size: 100% 100%, 50% !important;
	}
	.voucher-card-c {
		position: relative;
		z-index: 1;
		width: 70%;
		height: 100%;
		overflow: hidden;
		transform-origin: bottom right;
	}
	.voucher-card-tear-c {
		margin-left: -1px;
		width: 30%;
		height: 100%;
		overflow: hidden;
		transform-origin: bottom left;
	}
	.voucher-scale {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.devouche-c {
		perspective: 600px;
		will-change: transform;
	}
	.voucher-container {
		transform-style: preserve-3d;
		pointer-events: auto;
		perspective: 600px;
		will-change: transform;
		transform-origin: center;
	}
	.qr-line {
		background: linear-gradient(180deg, rgb(132, 204, 21) 85%, rgba(255, 0, 0, 0.9));
		&:nth-child(even) {
			transform: scale(-1) translateY(15%);
		}
	}
	.pic {
		position: absolute;
		left: -50%;
		right: 0;
		top: -50%;
		bottom: 0;
		.coffee {
			opacity: 0;
			transform: rotate(25deg) scale(1.5);
			transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease;

			width: 120%;
			height: 120%;
			background: linear-gradient(45deg, rgb(0 165 93) 45%, rgb(24 125 138) 50%),
				url(/src/assets/project/coffee-pattern-1.png);
			background-blend-mode: overlay, color-dodge;
			background-position: center;
			background-size: 100% 100%, 25%;

			&.active {
				opacity: 1;
				transform: scale(1);
			}
		}
	}
	.voucher-half {
		writing-mode: vertical-rl;
		text-orientation: sideways;
		right: 5%;
		transform: rotate(180deg);
	}
	.voucher-container {
		margin: auto;
		position: relative;
		width: 90%;
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		.voucher-card-tear {
			border: 1px dashed;
			position: relative;
			width: 100%;
			height: 100%;
			&::before,
			&::after {
				z-index: 1;
				border: 1px dashed;
				content: '';
				display: block;
				position: absolute;
				left: -1px;
				transform: translateX(-50%);
				border-radius: 50%;
				width: 32px;
				height: 24px;
				@apply bg-lime-500;
			}
			&:before {
				top: -12px;
			}
			&:after {
				bottom: -12px;
			}
			ul {
				left: -1px;
				position: absolute;
				transform: translateX(-50%);
				top: 3px;
				list-style-type: none;
				li {
					width: 4px;
					height: 4px;
					border-radius: 4px;
					margin: 6px 0;
					@apply bg-lime-500;
				}
			}
		}

		.voucher-card {
			border: 1px dashed;
			position: relative;
			width: 100%;
			height: 100%;
			&::before,
			&::after {
				z-index: 2;
				content: '';
				border: 1px dashed;
				display: block;
				position: absolute;
				right: -1px;
				transform: translateX(50%);
				border-radius: 50%;
				width: 32px;
				height: 24px;
				@apply bg-lime-500;
			}
			&:before {
				top: -12px;
			}
			&:after {
				bottom: -12px;
			}
			ul {
				right: -1px;
				position: absolute;
				transform: translateX(50%);
				top: 3px;
				list-style-type: none;
				li {
					width: 4px;
					height: 4px;
					border-radius: 4px;
					margin: 6px 0;
					@apply bg-lime-500;
				}
			}
			h2 {
				font-family: 'Bebas Neue', cursive;
			}
		}
	}
</style>
