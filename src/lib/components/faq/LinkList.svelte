<script lang="ts">
	import Icon from '@iconify/svelte';

	//@ts-ignore
	import * as animateScroll from 'svelte-scrollto';
	import type { Collection } from './FaqDefs';

	export let collections: Collection[];
	export let color: string;

	let colorData: any;

	let redColorData = {
		darkbg: 'bg-sky-700',
		background: 'bg-sky-50',
		border: 'border-none'
	};

	let blueColorData = {
		darkbg: 'bg-blue-700',
		background: 'bg-blue-50',
		border: 'border-blue-700'
	};

	$: if (color === 'red') {
		colorData = redColorData;
	} else if ((color = 'blue')) {
		colorData = blueColorData;
	}
</script>

<div class={`border-l-4 ${colorData.border} p-5 ${colorData.background} w-auto`}>
	<h2 class="mx-3 text-2xl font-bold">カテゴリーを見る</h2>
	<div class="md:grid grid-cols-2">
		{#each collections as collection}
			<button
				class="flex items-center ml-5 transition-all hover:-translate-y-1 hover:scale-101 hover:text-orange-600"
				on:click={() =>
					animateScroll.scrollTo({
						element: '#id' + collection.id,
						duration: 400,
						offset: -80
					})}
			>
				<div class="text-2xl text-slate-600">
					<Icon icon="material-symbols:link" />
				</div>
				<p class="block my-2 ml-2 underline">{collection.title}</p>
			</button>
		{/each}
	</div>
</div>
