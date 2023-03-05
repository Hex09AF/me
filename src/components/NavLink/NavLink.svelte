<script>
	import Hoverable from '../Hoverable.svelte';

	export let content = '';
	export let href = '';
</script>

<Hoverable let:hovering={active}>
	<a {href} class="group flex items-center" class:active>
		<div class="relative overflow-hidden text-sm font-medium">
			<div
				class="group-[.active]:translate-y-full group-[.active]:duration-[600ms] duration-[0ms] ease-[cubic-bezier(0.42,0,0.33,1)]"
			>
				{content}
			</div>
			<div
				class="group-[.active]:translate-y-0 group-[.active]:duration-[600ms] duration-[0ms] ease-[cubic-bezier(0.42,0,0.33,1)] absolute inset-0 -translate-y-full"
			>
				{content}
			</div>
		</div>
		<div
			class="w-2 relative ml-1 overflow-hidden group-hover:opacity-100 group-[.active]:opacity-100 opacity-0 ease-[cubic-bezier(0.42,0,0.33,1)] duration-300"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 384 512"
				class="group-[.active]:translate-y-full group-[.active]:duration-[300ms] duration-[0ms] group-[.active]:delay-200 ease-[cubic-bezier(0.42,0,0.33,1)]"
			>
				<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					class="dark:fill-white"
					d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 329.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 210.7 329.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 384 512"
				class="group-[.active]:translate-y-0 group-[.active]:duration-[300ms] duration-[0ms] group-[.active]:delay-200 ease-[cubic-bezier(0.42,0,0.33,1)] absolute inset-0 -translate-y-full"
			>
				<path
					class="dark:fill-white"
					d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 329.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 210.7 329.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
				/>
			</svg>
		</div>
	</a>
</Hoverable>
