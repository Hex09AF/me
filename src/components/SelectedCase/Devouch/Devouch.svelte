<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import qrImg from '../../../assets/project/qr.png';
	import Button from './Button.svelte';

	let active = false;

	let tl: gsap.core.Tween;
	let tlQr: gsap.core.Tween;

	onMount(() => {
		tl = gsap.from('.animation-text', {
			paused: true,
			opacity: 0,
			xPercent: 100,
			duration: 0.25,
			stagger: 0.075,
			ease: 'power1.inOut'
		});
		tlQr = gsap.from('#qrImage', {
			paused: true,
			opacity: 0,
			duration: 0.25,
			scale: 1.5,
		});
	});

	function activeBG() {
		if (active) {
			tl.reverse();
			tlQr.reverse();
		} else {
			tl.seek(0).restart();
			tlQr.seek(0).play();
		}
		active = !active;
	}
</script>

<div class="h-full">
	<div class="voucher-container">
		<div class="pic">
			<div class="coffee" class:active />
		</div>
		<div class="voucher-card flex">
			<h2 class="p-2 flex items-center tracking-[-0.5em]">
				<span class="text-8xl"> - </span>
				<span class="text-9xl"> 10 </span>
				<span class="text-7xl ml-2">%</span>
			</h2>
		</div>
		<div class="voucher-card-tear">
			<ul>
				{#each new Array(20).fill(0) as item}
					<li />
				{/each}
			</ul>
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
					<img
						id="qrImage"
						src={qrImg}
						alt="qr"
						width="80"
						height="80"
						class="rotate-90 origin-center"
					/>
				</div>
			</div>
			<button />
		</div>
	</div>
	<div class="absolute bottom-0 flex w-full justify-center gap-4 p-4">
		<Button handleClick={activeBG} />
		<Button />
		<Button />
		<Button />
	</div>
</div>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
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
	h2 {
		pointer-events: none;
	}
	.voucher-container {
		margin: auto;
		margin-top: 1rem;
		position: relative;
		overflow: hidden;
		width: 90%;
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		.voucher-card-tear {
			border: 1px dashed;
			position: relative;
			width: 30%;
			height: 100%;

			overflow: hidden;
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
			width: 70%;
			height: 100%;
			border-right: none;
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

			button {
				position: absolute;
				right: 14px;
				bottom: 14px;
				width: 30px;
				height: 30px;
				background-color: #da4d1d;
				border: none;
				border-radius: 30px;
				cursor: pointer;
				outline: none;
				transition: all 0.3s ease;
				mix-blend-mode: hard-light;
			}

			&:hover button {
				transform: scale(16.5);
			}
		}
	}
</style>
