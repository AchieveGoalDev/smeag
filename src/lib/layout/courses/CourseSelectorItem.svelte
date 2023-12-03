<script lang="ts">
	export let itemIndex: number;
	export let currentIndex: number;

	let selectState = 'unselected';

	$: if (itemIndex === currentIndex) {
		selectState = 'selected';
	} else {
		selectState = 'unselected';
	}

	function handleSetIndex() {
		currentIndex = itemIndex;
	}

	$: console.log(currentIndex);
</script>

<li>
	<button
		on:click={handleSetIndex}
		class={`font-bold text-md lg:text-lg xl:text-xl p-2 rounded-md ${selectState}`}
	>
		<slot />
	</button>
</li>

<style lang="postcss">
	.selected {
		border: none;
		background-color: #ea580c;
		color: white;
		transition-property: background-color;
		transition-duration: 200ms;
		transition-timing-function: ease-in-out;
	}

	.unselected {
		background-color: none;
		color: #333;
		transition-property: background-color, color;
		transition-duration: 200ms;
		transition-timing-function: ease-in-out;
		border: #f59e0b 2px solid;
	}

	.unselected:hover {
		background-color: #f59e0b;
		color: white;
	}
</style>
