<script lang="ts">
	import authImg from '../../../assets/project/auth.webp';
	import paymentImg from '../../../assets/project/payment.webp';
	import detailImg from '../../../assets/project/detail.webp';

	export let item: any;
</script>

<div class="flex justify-center items-center h-full">
	<div class="w-full aspect-video relative m-5">
		<img src={item.projectImg} alt="project" />
		<div class="absolute card-info">
			<div class="relative w-full h-full">
				<div class="card-info__text">Authentication</div>
				<span
					class="card-ping top-0 left-0 animate-[ping_2s_ease-in-out_infinite] absolute inline-flex h-full w-full bg-neutral-700 opacity-70"
				/>
				<div class="w-full h-full absolute flex text-xs justify-center items-center leading-[0.15]">
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
				<div class="w-full h-full absolute flex text-xs justify-center items-center leading-[0.15]">
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
				<div class="w-full h-full absolute flex text-xs justify-center items-center leading-[0.15]">
					+
				</div>
				<div class="card-info__image">
					<img src={detailImg} alt="payment" />
				</div>
			</div>
		</div>
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
</style>
