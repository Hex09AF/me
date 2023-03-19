<script>
	import Instagram from '../../assets/logo/instagram.png';
	import Twitter from '../../assets/logo/twitter-white.png';
	import Gmail from '../../assets/logo/gmail.webp';
</script>

<section>
	<div class="text-3xl text-center mb-5">
		<div>Let's connect</div>
	</div>

	<div class="flex items-center justify-center py-10">
		<a
			href="mailto:hex09af.dev@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk"
			class="gmail mr-4 glow inline-flex items-center gap-4 p-2 px-4"
		>
			<div class="logo">
				<img src={Gmail} alt="Gmail" />
			</div>

			<div class="divider" />
			<div class="banner flex flex-col justify-center items-center">
				<div class="uppercase text-xs">Say Hi!</div>
				<div class="uppercase text-xl">Gmail</div>
			</div>
		</a>

		<span class="instagram glow inline-flex items-center gap-4 p-2 px-4">
			<div class="logo">
				<img src={Instagram} alt="Instagram" />
			</div>
			<div class="divider" />
			<div class="flex flex-col justify-center items-center">
				<div class="uppercase text-xs">Find me on</div>
				<div class="uppercase text-xl">Instagram</div>
			</div>
		</span>

		<span class="twitter ml-4 glow inline-flex items-center gap-4 p-2 px-4">
			<div class="logo">
				<img src={Twitter} alt="Twitter" />
			</div>
			<div class="divider" />
			<div class="banner flex flex-col justify-center items-center">
				<div class="uppercase text-xs">Find me on</div>
				<div class="uppercase text-xl">Twitter</div>
			</div>
		</span>

		<span class="github ml-4 glow inline-flex items-center gap-4 p-2 px-4">
			<div class="logo" />
			<div class="divider" />
			<div class="banner flex flex-col justify-center items-center">
				<div class="uppercase text-xs">Find me on</div>
				<div class="uppercase text-xl">Github</div>
			</div>
		</span>
	</div>
</section>

<style lang="postcss" global>
	.glow {
		position: relative;
		border-radius: 12px;
		color: #fff;
		&::after,
		&::before {
			content: '';
			position: absolute;
			border-radius: 12px;
			z-index: -1;
		}
		&::before {
			box-shadow: 0 0 4px #fff;
			filter: blur(6px);
			top: -2px;
			left: -2px;
			width: calc(100% + 4px);
			height: calc(100% + 4px);
		}
		&::after {
			box-shadow: 0 0 4px #fff;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	.instagram.glow {
		&::before {
			background: linear-gradient(45deg, #ffd600, #ff7a00, #ff0069, #d300c5, #7637fa);
		}
		&::after {
			background: #000;
		}
	}

	.glow.twitter {
		border: 1px solid white;

		&::before {
			background: linear-gradient(45deg, #1d9bf0, #1d9bf0, #1d9bf0);
		}
		&::after {
			background: url('../../assets/logo/twitter-banner.jpeg');
			background-size: cover;
			background-position: -56px 45%;
			background-repeat: no-repeat;
			opacity: 0.7;
			filter: blur(0.6px);
		}
	}

	.github.glow {
		border: 1px solid white;

		&::before {
			/* background: linear-gradient(45deg, #1d9bf0, #1d9bf0, #1d9bf0); */
		}
		&::after {
			background: url('../../assets/logo/github.webp');
			background-size: 110%;
			background-position: 5px 50%;
			background-repeat: no-repeat;
			transform: scaleX(-1);
		}
	}

	.divider {
		position: relative;
		width: 2px;
		height: 40px;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 12px;
		&::before {
			content: '';
			position: absolute;
			top: -1px;
			left: -1px;
			width: calc(100% + 2px);
			height: calc(100% + 2px);
			border-radius: 12px;
		}
	}

	.instagram .divider {
		&::before {
			background: linear-gradient(45deg, #ffd600, #ff7a00, #ff0069, #d300c5, #7637fa);
			filter: blur(6px);
		}
	}

	.logo {
		width: 36px;
		position: relative;
		img {
			position: relative;
			z-index: 1;
		}
		&::before {
			border-radius: 12px;
			content: '';
			position: absolute;
			top: -2px;
			left: -2px;
			width: calc(100% + 4px);
			height: calc(100% + 4px);
		}
	}

	.instagram .logo {
		&::before {
			background: linear-gradient(45deg, #ffd600, #ff7a00, #ff0069, #d300c5, #7637fa);
			filter: blur(6px);
		}
	}
</style>
