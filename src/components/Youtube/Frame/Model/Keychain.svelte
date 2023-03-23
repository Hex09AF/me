<script lang="ts">
	import { OrbitControls, T } from '@threlte/core';
	import { GLTF } from '@threlte/extras';
	import { degToRad } from 'three/src/math/MathUtils';
</script>

<T.PerspectiveCamera makeDefault position={[5, 5, 15]} fov={24}>
	<OrbitControls autoRotate target={{ y: 3 }} />
</T.PerspectiveCamera>

<T.DirectionalLight castShadow position={[3, 10, 10]} />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

<GLTF
	position={{ x: 1, y: 0, z: 0 }}
	castShadow
	receiveShadow
	scale={0.5}
	url="/models/key_chain/scene.gltf"
	useDraco={true}
	useMeshopt={true}
/>

<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
	<T.CircleGeometry args={[3, 72]} />
	<T.MeshStandardMaterial color="white" />
</T.Mesh>
