<script lang="ts">
	import Gmail from '../../assets/logo/gmail.webp';
	import Github from '../../assets/logo/hearts.gif';
</script>

<section
	id="contact"
	class="contact-c h-screen grid place-content-center grid-rows-[2fr_2.5fr] md:grid-rows-none md:grid-cols-[1fr_2fr] gap-4 md:gap-12"
>
	<div class="contact-image-c relative md:h-50%">
		<img
			loading="lazy"
			id="contact-gmail-image"
			class="absolute w-1/2 md:w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			src={Gmail}
			alt="Gmail"
		/>
		<img
			loading="lazy"
			id="contact-github-image"
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 contact-github"
			src={Github}
			alt="Github"
		/>
	</div>

	<div class="mb-5 h-full flex flex-col md:justify-center">
		<div class="text-6xl md:text-9xl uppercase font-medium">
			<div class="text-5xl text-red-500">Let's</div>
			<div class="text-create">Create</div>
			<div class="text-5xl">Together</div>
		</div>
		<div class="mt-4">
			Email me
			<a
				id="contact-gmail"
				href="mailto:lsqhuy@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk"
				class="unstyled gmail"
			>
				<span class="text-draw underline">lsqhuy@gmail.com</span>
			</a>
			or find me on
			<a
				id="contact-github"
				target="_blank"
				href="https://github.com/Hex09AF"
				class="unstyled github"
			>
				<span class="text-draw underline"> github/hex09af </span>
			</a>
		</div>
	</div>
</section>

<style lang="postcss">
	:root {
		--color-1: #186cb8;
		--color-2: #2a9a9f;
		--color-3: #f1b211;
		--color-4: #e83611;
		--color-5: #f9002f;
	}

	.text-create {
		width: min-content;
		background: linear-gradient(
			219deg,
			var(--color-1) 19%,
			transparent 19%,
			transparent 20%,
			var(--color-2) 20%,
			var(--color-2) 39%,
			transparent 39%,
			transparent 40%,
			var(--color-3) 40%,
			var(--color-3) 59%,
			transparent 59%,
			transparent 60%,
			var(--color-4) 60%,
			var(--color-4) 79%,
			transparent 79%,
			transparent 80%,
			var(--color-5) 80%
		);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	.contact-image-c {
		img#contact-github-image {
			visibility: hidden;
		}
	}

	.contact-c:has(#contact-github:hover, #contact-github:focus) {
		#contact-gmail-image {
			visibility: hidden;
		}
		#contact-github-image {
			visibility: visible;
		}
	}
</style>
