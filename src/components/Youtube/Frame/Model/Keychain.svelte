<script lang="ts">
	import { Object3DInstance, OrbitControls, T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import type { Material, Object3D } from 'three';
	import { degToRad } from 'three/src/math/MathUtils';

	const { gltf } = useGltf<{
		nodes: {
			Sketchfab_model: Object3D;
		};
		materials: {
			Material_MR: Material;
		};
	}>('/models/key_chain/scene.gltf', {
		useDraco: 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/',
		useMeshopt: true
	});
	$: helmet = $gltf?.nodes['Sketchfab_model'];
</script>

<T.PerspectiveCamera makeDefault position={[5, 5, 15]} fov={24}>
	<OrbitControls autoRotate target={{ y: 3 }} />
</T.PerspectiveCamera>

<T.Group scale={0.5}>
	{#if helmet}
		<Object3DInstance object={helmet} />
	{/if}
</T.Group>
