<script lang="ts">
	import { slide } from 'svelte/transition';
	import Question from './Question.svelte';
	import Icon from '@iconify/svelte';

	import type { Collection } from './FaqDefs';
	export let collection: Collection;

	export let color: string;

	let colorData: any;

	let expanded = false;

	if (collection.id === '0') {
		expanded = true;
	}

	let redColorData = {
		darkbg: 'bg-sky-700',
		highlightbg: 'bg-orange-600',
		background: 'bg-orange-50',
		border: 'border-orange-700'
	};

	let blueColorData = {
		darkbg: 'bg-blue-800',
		highlightbg: 'bg-blue-600',
		background: 'bg-yellow-50',
		border: 'border-blue-700'
	};

	$: if (color === 'red') {
		colorData = redColorData;
	} else if (color === 'blue') {
		colorData = blueColorData;
	}

	function handleBGClosed() {
		return `${colorData.darkbg} text-white rounded-lg p-2 text-2xl md:text-3xl font-bold flex w-full items-center`;
	}

	function handleBGOpen() {
		return `${colorData.highlightbg} text-white rounded-lg p-2 text-2xl md:text-3xl font-bold flex w-full items-center`;
	}
</script>

<div class="my-5 text-xl flex-col shadow-md">
	<button
		on:click={() => {
			expanded = !expanded;
		}}
		id={'id' + collection.id}
		class={expanded ? handleBGOpen() : handleBGClosed()}
	>
		{#if expanded}
			<Icon icon="mdi:plus-circle" />
		{:else}
			<Icon icon="mdi:minus-circle" />
		{/if}
		{collection.title}
	</button>
	{#if expanded}
		<div
			transition:slide={{ duration: 500 }}
			class={`${colorData.background} py-3 px-2 rounded-md`}
		>
			{#each collection.questions as question}
				<Question {question} />
			{/each}
		</div>
	{/if}
</div>
