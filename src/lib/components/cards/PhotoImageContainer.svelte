<script lang="ts">
	import PhotoImage from './PhotoImage.svelte';
	import Icon from '@iconify/svelte';
	let images = [
		'/EncantoResize.png',
		'/Capital.jpg',
		'/Ocean.png',
		'/business.jpg',
		'/family-photo.jpg'
	];
	let index = 1;
	let onFirst = false;

	function cycleImage() {
		if (index > images.length) {
			index = 0;
			console.log('reset');
		}

		index++;
		console.log(index);
	}

	function handleImageLeft() {
		if (index === 0) {
			index = 1;
		} else {
			index--;
		}
	}

	function handleImageRight() {
		if (index === images.length) {
			index = images.length;
		} else {
			index++;
		}
	}

	function selectImage(j: number) {
		index = j;
	}

	setInterval(cycleImage, 3000);
</script>

<div class="w-full h-full grid grid-cols-1 grid-rows-1 overflow-visible">
	{#each images as image, i}
		{#if index >= i + 1}
			{#key image}
				<PhotoImage url={image} angle={Math.random() * 30} />
			{/key}
		{/if}
	{/each}
	<div
		class={`flex flex-row place-content-around overflow-visible w-2/3 mx-auto bg-white p-2 bg-opacity-50 text-orange-500`}
	>
		<button on:click={handleImageLeft}>
			<Icon
				icon="bi:caret-left-fill"
				class="hover:cursor-pointer hover:scale-110 transition-all text-sky-800"
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
				class="hover:cursor-pointer hover:scale-110 transition-all text-sky-800"
			/>
		</button>
	</div>
</div>
