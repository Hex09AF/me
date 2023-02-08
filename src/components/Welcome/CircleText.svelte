<script>
	export let fillColor = 'fill-white';
</script>

<svg
	width="100%"
	height="100%"
	viewBox="0 0 600 400"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
	<path
		id="multiarc"
		d="
  M 120, 200
  a 175,175 0 1,1 350,0
  a 175,175 0 1,1 -350,0
  "
		fill="none"
	/>
	<text dy="1" font-size="40" textLength="1050" font-weight="bolder">
		<textPath id="multiarcText" href="#multiarc" aria-label="Smashing" class={fillColor}>
			SMASHING MAGAZINE SMASHING MAGAZINE
		</textPath>
	</text>
</svg>
