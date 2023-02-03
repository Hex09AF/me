<script>
	import { onMount } from 'svelte';
	import './nyan.postcss';

	onMount(() => {
		function cycleFrames(_nyanCat, _currentFrame) {
			_nyanCat.classList = [];
			_nyanCat.classList.add(`frame${_currentFrame}`);
		}

		function replicateSparks(_sparksRow) {
			const numberOfRowsToCoverEntireScreen = Math.ceil(
				document.body.offsetHeight / _sparksRow.offsetHeight
			);
			const newSparksRows = document.createElement('div');

			for (let a = 0; a < numberOfRowsToCoverEntireScreen - 1; a++) {
				newSparksRows.append(_sparksRow.cloneNode(true));
			}

			document.body.prepend(newSparksRows);
		}

		let nyanCat = document.getElementById('nyan-cat');
		let currentFrame = 1;

		// replicateSparks(document.getElementsByClassName('sparks-combo')[0]);

		setInterval(function () {
			currentFrame = (currentFrame % 6) + 1;
			cycleFrames(nyanCat, currentFrame);
		}, 70);
	});
</script>

<section>
	<!-- <div class="sparks-combo">
		<div class="spark" />
		<div class="spark" />
		<div class="spark" />
		<div class="spark" />
	</div> -->

	<div id="wave-a" class="hot rainbow" />
	<div id="wave-a" class="cold rainbow" />

	<div id="wave-b" class="hot rainbow" />
	<div id="wave-b" class="cold rainbow" />

	<div id="nyan-cat" class="frame1">
		<div id="tail" />

		<div id="paws" />

		<div id="pop-tarts-body">
			<div id="pop-tarts-body-cream" />
		</div>

		<div id="head">
			<div id="face" />
		</div>
	</div>

	<a href="https://github.com/cristurm/nyan-cat" title="Nyan Cat's home at GitHub" class="repo">
		<i class="octicon octicon-mark-github" />
		<span>My Github Repo</span>
	</a>
</section>
