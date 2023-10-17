<script lang="ts">
	import { howToSections } from './howToData';

	import ProgressBar from './ProgressBar.svelte';
	import ScrollTab from './ScrollTab.svelte';
	import HowToContent from './HowToContent.svelte';
	import ColorButton from '$lib/components/buttons/ColorButton.svelte';

	let index = 0;
	let maxIndex = 5;

	$: console.log(index);
</script>

<div class="grid grid-cols-12 w-4/5 my-10 place-items-center gap-0 mx-auto">
	<ScrollTab direction="left" bind:index {maxIndex} />
	<div class="col-span-10 w-full z-10 drop-shadow-lg bg-slate-50">
		<ProgressBar bind:index />
		<div class="grid grid-cols-1 grid-rows-1">
			{#each howToSections as section, i (i)}
				{#if index === i}
					<HowToContent data={section} />
				{/if}
			{/each}
		</div>
		<div class="w-full bg-sky-700 py-5 flex flex-row justify-center">
			<ColorButton params={{ color: 'orange', link: '#', function: null }}>
				今すぐお問い合わせ
			</ColorButton>
		</div>
	</div>
	<ScrollTab direction="right" bind:index {maxIndex} />
</div>
