<script lang="ts">
	export let handleClick: any = '';
	export let text = '';
</script>

<div class="btn-round__c">
	<div class="screws__c">
		<div class="screw" />
		<div class="screw" />
	</div>
	<button class="btn-round" type="button" on:click={handleClick ? handleClick : () => {}}>
		<div class="btn-round__shadow">
			<div class="btn-round__icon">
				{text}
			</div>
		</div>
	</button>
	<div class="screws__c">
		<div class="screw" />
		<div class="screw" />
	</div>
</div>

<style lang="postcss">
	:root {
		--btn-size: 60px;
	}
	.btn-round:hover {
		.btn-round {
			&__icon {
				color: #fff;
			}
			&__shadow {
				box-shadow: none;
				transform: translateY(4px);
			}
		}
	}
	.btn-round:active {
		.btn-round {
			&__shadow {
				box-shadow: 0 -4px 0 #101016, inset 0 100em 100em rgb(0 0 0 / 10%);
				transform: translateY(8px);
			}
		}
	}
	.btn-round {
		min-height: calc(var(--btn-size) + 8px);
		overflow: hidden;
		border-radius: 100em;
		&__c {
			display: flex;
			background-color: #1c1c25;
			padding: 1rem;
			border-radius: 0.5rem;
		}
		&__shadow {
			background-color: #25252f;
			width: var(--btn-size);
			height: var(--btn-size);
			border-radius: 100em;

			display: flex;
			justify-content: center;
			align-items: center;

			box-shadow: 0 4px 0 #101016;
			transition: transform 0.1s ease, box-shadow 0.1s ease;
		}
		&__icon {
			color: #656572;
		}
	}

	.screws {
		&__c {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.screw {
				background-color: #3b3b44;
				width: 0.54em;
				height: 0.54em;
				min-height: 0.54em;
				min-width: 0.54em;
				border-radius: 100%;
			}
		}
	}
</style>
