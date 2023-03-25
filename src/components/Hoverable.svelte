<script lang="ts">
	let hovering: boolean;
	let timeout: number | null;

	function enter() {
		if (timeout) return;
		hovering = true;
		timeout = setTimeout(() => {
			hovering = false;
			timeout = null;
		}, 600);
	}
</script>

<div on:mouseenter={enter}>
	<slot {hovering} />
</div>
