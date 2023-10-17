<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import HowToPoint from './HowToPoint.svelte';
	import type { HowToSectionContent } from './howToData';

	export let data: HowToSectionContent;
</script>

<div class="grid grid-cols-12 w-full col-span-full row-span-full">
	<div
		class="col-span-full py-2 flex w-full justify-center bg-sky-700 text-white text-3xl font-bold"
	>
		<h3 in:fly={{ x: -50 }} out:fly={{ x: 50 }}>
			{data.title[0]}
		</h3>
	</div>
	<div
		transition:fade
		style:background-image={`url(${data.image})`}
		class="col-span-3 image-container h-[250px]"
	>
		<div
			class="bg-[rgba(0,0,0,0.4)] h-full w-full flex flex-col text-white font-bold text-2xl drop-shadow items-center justify-center select-none"
		>
			{#each data.title as title, i}
				{#if i > 0}
					<h3>{title}</h3>
				{/if}
			{/each}
		</div>
	</div>
	<div
		transition:fade|local={{ duration: 200 }}
		class="col-span-9 flex flex-col gap-4 p-5 text-xl font-primary-jp"
	>
		{#if data}
			{#each data.content as content, i (content)}
				<div
					in:fly|global={{ y: -20, duration: 100, delay: i * 100 }}
					out:fly|global={{ y: 20, duration: 100, delay: i * 100 }}
				>
					<HowToPoint>{content}</HowToPoint>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="post-css">
	.image-container {
		background-position: center;
		background-repeat: none;
		background-clip: content-box;
	}
</style>
