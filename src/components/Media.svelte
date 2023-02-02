<script lang="ts">
	import { Avatar, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';
	import { writable } from 'svelte/store';

	const storeLayout: Writable<string> = writable('horz');
</script>

<div class="live-media">
	<div class="live-media__container">
		<div class="live-media__content">Hello</div>
	</div>
	<div class="live-media__metadata">
		<h4 class="live-media__title">lofi hip hop radio - beats to relax/study to</h4>
		<div class="live-media__owner-info flex justify-between">
			<div class="live-media__owner flex">
				<Avatar />
				<div>
					<div>Hex</div>
					<div>11.9M subscribers</div>
				</div>
				<div>
					<button class="btn btn-base variant-filled-primary"> Join </button>
				</div>
				<div class="live-media__subscribe">
					<button class="btn btn-base variant-filled-secondary"> subscribe </button>
				</div>
			</div>

			<div class="live-media__actions flex">
				<div class="live-media__basic flex">
					<div>
						<RadioGroup selected={storeLayout}>
							<RadioItem value="horz">Horizontal</RadioItem>
							<RadioItem value="vert">Vertical</RadioItem>
						</RadioGroup>
					</div>
					<div>
						<button> share </button>
					</div>
				</div>
				<div class="live-media__advance flex">
					<div>
						<button> clip </button>
					</div>
					<div>
						<button> save </button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.live-media {
		@apply col-start-1 col-span-8;
		height: 70vh;

		&__container {
			@apply bg-teal-400;
			@apply aspect-video;
			max-width: 100%;
			max-height: 100%;
		}
	}
</style>
