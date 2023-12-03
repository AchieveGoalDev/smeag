<script lang="ts">
	import { onDestroy } from 'svelte';

	import PhotoImage from './PhotoImage.svelte';
	import Icon from '@iconify/svelte';
	let images = [
		'/photos/lesson.jpg',
		'/photos/beach.jpg',
		'/photos/Food.png',
		'/photos/SMEAG-CP3.png',
		'/lessonstyle.jpg'
	];

	let text = ['レッスン楽しかった', '海がきれい！', '美味しかった♥', 'いい出会い', '分かりやすい'];

	let index = 1;

	let interval: number;

	function pauseInterval() {
		clearInterval(interval);
	}

	function startInterval() {
		interval = setInterval(cycleImage, 4000);
	}

	function cycleImage() {
		if (index > images.length - 1) {
			index = 0;
		}

		index++;
		console.log(index);
	}

	function handleImageLeft() {
		pauseInterval();
		console.log(index);
		if (index <= 1) {
			index = 1;
		} else {
			index--;
		}
	}

	function handleImageRight() {
		pauseInterval();
		if (index === images.length) {
			index = images.length;
		} else {
			index++;
		}
	}

	function selectImage(j: number) {
		pauseInterval();
		index = j + 1;
	}

	onDestroy(() => pauseInterval());

	startInterval();
</script>

<div class="w-full h-full grid grid-cols-1 grid-rows-1 overflow-visible">
	{#each images as image, i}
		{#if index >= i + 1}
			{#key image}
				<PhotoImage url={image} angle={Math.random() * 30}>
					{text[i]}
				</PhotoImage>
			{/key}
		{/if}
	{/each}
</div>
<div
	class={`flex flex-row place-content-around overflow-visible w-2/3 mx-auto bg-white p-2 bg-opacity-80 text-orange-500 relative rounded-full border-2 border-sky-100`}
>
	<button on:click={handleImageLeft}>
		<Icon
			icon="bi:caret-left-fill"
			class="hover:cursor-pointer hover:scale-110 transition-all text-sky-800 text-2xl"
		/>
	</button>
	{#each images as image, j}
		<button on:click={() => selectImage(j)}>
			<Icon
				icon="map:circle"
				class={`drop-shadow-md  bg-none ${
					index !== j + 1 && 'opacity-30'
				} transition-all hover:text-sky-800 hover:opacity-100`}
			/>
		</button>
	{/each}
	<button on:click={handleImageRight}>
		<Icon
			icon="bi:caret-right-fill"
			class="hover:cursor-pointer hover:scale-110 transition-all text-sky-800 text-2xl"
		/>
	</button>
</div>
