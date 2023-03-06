<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import authImg from '../../assets/project/auth.png';
	import paymentImg from '../../assets/project/payment.png';
	import detailImg from '../../assets/project/detail.png';
	import Devouch from './Devouch/Devouch.svelte';

	export let isOdd = false;
	export let item: any;
	export let isDetail = false;

	function seeDetail() {
		isDetail = !isDetail;
	}
</script>

<div class:isOdd class="content-item grid grid-cols-2 prose rounded-3xl overflow-hidden">
	<div class:col-start-2={isOdd} class="row-start-1">
		<ProjectCard
			onDetail={seeDetail}
			title={item.title}
			role={item.role}
			description={item.description}
		/>
	</div>
	<div class:relative={isDetail} class:col-start-1={isOdd} class={`${item.bg} row-start-1 `}>
		{#if isDetail && item.title === 'Foodelive'}
			<div class="flex justify-center items-center h-full">
				<div class="relative m-5">
					<img src={item.projectImg} alt="project" />
					<div class="absolute card-info">
						<div class="relative w-full h-full">
							<div class="card-info__text">Authentication</div>
							<span
								class="card-ping top-0 left-0 animate-[ping_2s_ease-in-out_infinite] absolute inline-flex h-full w-full bg-neutral-700 opacity-70"
							/>
							<div
								class="w-full h-full absolute flex text-xs justify-center items-center leading-[0.15]"
							>
								+
							</div>
							<div class="card-info__image">
								<img src={authImg} alt="auth" />
							</div>
						</div>
					</div>

					<div class="absolute card-info payment">
						<div class="relative w-full h-full">
							<div class="card-info__text">Payment</div>
							<span
								class="card-ping top-0 left-0 animate-[ping_2s_ease-in-out_infinite] absolute inline-flex h-full w-full bg-neutral-700 opacity-70"
							/>
							<div
								class="w-full h-full absolute flex text-xs justify-center items-center leading-[0.15]"
							>
								+
							</div>
							<div class="card-info__image">
								<img src={paymentImg} alt="payment" />
							</div>
						</div>
					</div>

					<div class="absolute card-info detail">
						<div class="relative w-full h-full">
							<div class="card-info__text">Detail</div>
							<span
								class="card-ping top-0 left-0 animate-[ping_2s_ease-in-out_infinite] absolute inline-flex h-full w-full bg-neutral-700 opacity-70"
							/>
							<div
								class="w-full h-full absolute flex text-xs justify-center items-center leading-[0.15]"
							>
								+
							</div>
							<div class="card-info__image">
								<img src={detailImg} alt="payment" />
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
		{#if isDetail && item.title === 'Devouch'}
			<Devouch />
		{/if}
	</div>
</div>

<style lang="postcss">
	.card-info.detail {
		top: unset;
		bottom: 22%;
		left: 2%;
		&:hover {
			width: 140px;
			height: 120px;
		}
	}
	.card-info.payment {
		top: 37%;
		right: 5%;
		&:hover {
			width: 120px;
			height: 100px;
		}
	}
	.card-info {
		height: 20px;
		width: 20px;
		top: 0.75%;
		right: 1.1%;
		background: rgba(0, 0, 0, 0.7);
		transform-origin: center;
		transition: width 550ms ease, height 550ms ease, right 550ms ease, top 550ms ease;
		box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 1%), 0 6.7px 5.3px rgb(0 0 0 / 2%),
			0 12.5px 10px rgb(0 0 0 / 3%), 0 22.3px 17.9px rgb(0 0 0 / 3%),
			0 41.8px 33.4px rgb(0 0 0 / 4%), 0 100px 80px rgb(0 0 0 / 5%), 0 0px 2.2px rgb(0 0 0 / 5%),
			0 0px 5.3px rgb(0 0 0 / 7%), 0 0px 10px rgb(0 0 0 / 8%), 0 0px 17.9px rgb(0 0 0 / 10%),
			0 0px 33.4px rgb(0 0 0 / 12%), 0 0px 80px rgb(0 0 0 / 16%), 0 0.2px 2.2px rgb(0 0 0 / 1%),
			0 0.6px 5.3px rgb(0 0 0 / 2%), 0 1.1px 10px rgb(0 0 0 / 3%), 0 2px 17.9px rgb(0 0 0 / 3%),
			0 3.8px 33.4px rgb(0 0 0 / 4%), 0 9px 80px rgb(0 0 0 / 5%);
		&__text {
			visibility: hidden;
			font-weight: 500;
			position: absolute;
			left: 10%;
			bottom: 5%;
			font-size: 0.6rem;
			letter-spacing: 1px;
			color: #fff;
			white-space: nowrap;
			z-index: 2;
			opacity: 0;
			transform: translateY(25%);
			transition: opacity 250ms ease, transform 250ms ease;
		}
		&__image {
			overflow: hidden;
			width: 100%;
			height: 100%;
			position: relative;
			img {
				opacity: 0;
				position: absolute;
				object-fit: cover;
				transition: opacity 550ms ease;
			}
		}
		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(
				to top,
				rgba(0, 0, 0, 0.8) 0%,
				rgba(0, 0, 0, 0) 40%,
				transparent 100%
			);
			z-index: 1;
			opacity: 0;
			transition: opacity 550ms ease;
		}
		&:hover {
			width: 100px;
			height: 100px;
			background: none;
			.card-ping {
				opacity: 0;
				animation: none;
			}
			.card-info__text {
				visibility: visible;
				transition-delay: 550ms;
				opacity: 1;
				transform: translateY(0%);
			}
			.card-info__image {
				img {
					opacity: 1;
				}
			}
			&::after {
				opacity: 1;
			}
		}
	}
	.special-grid-wrapper {
		height: 100%;
	}
	.special-grid {
		height: 100%;
		position: relative;
		transition: 500ms;
		display: grid;
		grid-template-rows: 0.5fr 0.5fr 0.5fr 2.5fr;

		.number:first-child {
			border-top: none;
		}
	}

	:where(.number) {
		@apply p-3;
		transition: 300ms;
		border-top: 2px dashed white;
	}

	:where(.number):hover {
		@apply bg-white text-black;
	}

	.special-grid:has(.number-1:hover) {
		grid-template-rows: 2.5fr 0.5fr 0.5fr 0.5fr;
	}

	.special-grid:has(.number-2:hover) {
		grid-template-rows: 0.5fr 2.5fr 0.5fr 0.5fr;
	}
	.special-grid:has(.number-3:hover) {
		grid-template-rows: 0.5fr 0.5fr 2.5fr 0.5fr;
	}

	.content-item {
		position: relative;
	}
	.content-item::before {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		height: 100%;
		width: 2px;
		background-color: black;
		z-index: 10;
	}
	.content-item {
		border: 2px solid black;
		margin-top: -2px;
	}
</style>
