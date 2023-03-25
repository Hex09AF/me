<script>
	import Hoverable from '../Hoverable.svelte';

	export let content = '';
	export let href = '';
	export let icon = '🥳';
	export let target = '_self';
	export let rel = '';
</script>

<Hoverable let:hovering={active}>
	<a {href} class="group flex items-center" class:active {target} {rel}>
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
			class="w-4 relative ml-1 overflow-hidden group-hover:opacity-100 group-[.active]:opacity-100 opacity-0 ease-[cubic-bezier(0.42,0,0.33,1)] duration-300"
		>
			<div
				class="group-[.active]:translate-y-full group-[.active]:duration-[300ms] duration-[0ms] group-[.active]:delay-200 ease-[cubic-bezier(0.42,0,0.33,1)]"
			>
				{icon}
			</div>
			<div
				class="group-[.active]:translate-y-0 group-[.active]:duration-[300ms] duration-[0ms] group-[.active]:delay-200 ease-[cubic-bezier(0.42,0,0.33,1)] absolute inset-0 -translate-y-full"
			>
				{icon}
			</div>
		</div>
	</a>
</Hoverable>
