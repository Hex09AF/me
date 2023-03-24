<script lang="ts">
	import { OrbitControls, T } from '@threlte/core';
	import { GLTF } from '@threlte/extras';
	import { spring } from 'svelte/motion';

	const scale = spring(1.5);
</script>

<T.PerspectiveCamera makeDefault position={[5, 5, 15]} fov={24}>
	<OrbitControls autoRotate target={{ y: 3 }} />
</T.PerspectiveCamera>

<GLTF
	interactive
	scale={$scale}
	position={{
		x: 0,
		y: 2.1,
		z: 0
	}}
	on:pointerenter={() => ($scale = 2.5)}
	on:pointerleave={() => ($scale = 1.5)}
	url="/models/totoro/scene.gltf"
	useDraco={true}
	useMeshopt={true}
/>
