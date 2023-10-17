<script lang="ts">
	import Icon from '@iconify/svelte';
	export let index: number;
	export let maxIndex: number;
	export let direction: 'left' | 'right';

	function handleLeft() {
		--index;
	}

	function handleRight() {
		++index;
	}
</script>

{#if direction === 'left'}
	<button
		disabled={index === 0}
		on:click={handleLeft}
		class="col-span-1
        text-slate-800
        drop-shadow-md
        py-10
        text-3xl
        rounded-l-2xl
        translate-x-4
        w-full
        h-full
        transition-all
        hover:translate-x-1
        hover:icon flex
        items-center
        justify-center
        hover:cursor-pointer
        hover:bg-orange-600
        hover:text-white
        active:bg-orange-400
        disabled:opacity-0
        disabled:hover:bg-gray-500
        disabled:hover:cursor-default
        disabled:translate-x-10
        "
	>
		{#if index === 0}
			<Icon icon="teenyicons:x-solid" />
		{:else if index > 0}
			<Icon icon="teenyicons:left-outline" />
		{/if}
	</button>
{:else if direction === 'right'}
	<button
		disabled={index === maxIndex}
		on:click={handleRight}
		class="col-span-1
        text-slate-800
        drop-shadow-md
        py-10
        text-3xl
        rounded-r-2xl
        -translate-x-4
        w-full
        h-full
        transition-all
        hover:-translate-x-1
        hover:icon flex
        items-center
        justify-center
        hover:cursor-pointer
        hover:bg-orange-600
        hover:text-white
        active:bg-orange-400
        disabled:opacity-0
        disabled:hover:bg-gray-500
        disabled:hover:cursor-default
        disabled:-translate-x-10
        "
	>
		{#if index === maxIndex}
			<Icon icon="teenyicons:x-solid" />
		{:else if index < maxIndex}
			<Icon icon="teenyicons:right-outline" />
		{/if}
	</button>
{/if}
