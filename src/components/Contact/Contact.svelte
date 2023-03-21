<script lang="ts">
	import Gmail from '../../assets/logo/gmail.webp';
	import Github from '../../assets/logo/hearts.gif';
</script>

<section
	id="contact"
	class="contact-c h-screen grid place-content-center grid-cols-[1.5fr_2fr] gap-12"
>
	<div class="contact-image-c relative h-50%">
		<img
			id="contact-gmail-image"
			class="absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			src={Gmail}
			alt="Gmail"
		/>
		<img
			id="contact-github-image"
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 contact-github"
			src={Github}
			alt="Github"
		/>
	</div>

	<div class="mb-5 h-screen flex flex-col justify-center">
		<div class="text-9xl uppercase font-medium">
			<div class="text-red-500">Work</div>
			<div>With me</div>
		</div>
		<div class="mt-4">
			Email me
			<a
				id="contact-gmail"
				href="mailto:lsqhuy@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk"
				class="unstyled gmail"
			>
				<span>lsqhuy@gmail.com</span>
			</a>
			or find me on
			<a id="contact-github" href="https://github.com/Hex09AF" class="unstyled github">
				github/hex09af
			</a>
		</div>
	</div>
</section>

<style lang="postcss">
	.contact-image-c {
		img {
			visibility: hidden;
		}
	}
	.contact-c:has(#contact-gmail:hover) #contact-gmail-image {
		visibility: visible;
	}

	.contact-c:has(#contact-github:hover) #contact-github-image {
		visibility: visible;
	}
</style>
