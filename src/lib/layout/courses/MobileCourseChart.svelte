<script lang="ts">
	import type { GraphData } from './courseData';
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import Icon from '@iconify/svelte';

	export let data: GraphData | null;

	let chart: HTMLElement | null;

	onMount(() => {
		const chartParams = {
			type: 'bar',
			data,
			options: {
				indexAxis: 'y',
				responsive: true,
				maintainAspectRatio: false
			}
		};

		chart = document.getElementById('chart');

		//@ts-expect-error
		new Chart(chart, chartParams);
	});
</script>

<div
	class="w-full md:w-3/5 mx-auto grid grid-cols-1 grid-rows-2 place-content-center min-h-[500px] px-2"
>
	<div class="col-start-1 col-span-1 h-full relative">
		<canvas id="chart" />
	</div>
	<div
		class="col-span-2 flex flex-col items-center justify-center w-full h-full relative font-heading-jp"
	>
		<div class="square" />
		<div class="up-arrow drop-shadow-md">
			<Icon icon="solar:map-arrow-up-bold" class="text-8xl text-orange-600" />
		</div>
		<h2 class="text-4xl text-sky-700">
			<span class="text-orange-500">{data?.meta.test}</span>スコアが
		</h2>
		<h2 class="text-5xl font-bold text-sky-700">
			平均<span class="text-orange-500">{data?.meta.amount}</span>点アップ!
		</h2>
	</div>
</div>

<style lang="postcss">
	.up-arrow {
		animation: 2s ease-in-out 1s infinite up-bounce;
	}

	@keyframes up-bounce {
		from {
			transform: translateY(0px);
		}

		50% {
			transform: translateY(-30px) rotateY(180deg);
		}

		to {
			transform: translateY(0px);
		}
	}
</style>
