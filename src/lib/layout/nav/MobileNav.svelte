<script lang="ts">
	import { navButtons } from './navData';
	import Icon from '@iconify/svelte';
	import MobileNavButton from './MobileNavButton.svelte';
	import { fade, slide } from 'svelte/transition';
	import ContactButton from '$lib/components/buttons/ContactButton.svelte';
	import type { ContactButtonParams } from '$lib/components/buttons/buttonDefs';

	let isOpen = false;

	const phoneButtonParams: ContactButtonParams = {
		type: 'phone',
		color: 'blue',
		link: '03-5302-2239'
	};

	const homeButtonParams = {
		url: '/',
		text: 'トップページ',
		icon: 'material-symbols:home'
	};

	$: console.log(isOpen);
</script>

<nav class="shadow-md">
	<button
		on:click={() => (isOpen = !isOpen)}
		class="w-full bg-orange-600 py-3 h-[80px] flex flex-row place-content-between items-center px-4 text-3xl"
	>
		<img src="/smeag-logo.svg" alt="SMEAGのロゴ" class="h-2/3 bg-white rounded-md p-1" />
		<div class="grid grid-cols-1 grid-rows-1">
			{#if isOpen}
				<div transition:fade class="row-span-full col-span-full">
					<Icon icon="tabler:x" class="text-white text-3xl" />
				</div>
			{:else}
				<div transition:fade class="row-span-full col-span-full">
					<Icon icon="quill:hamburger" class="text-white text-3xl" />
				</div>
			{/if}
		</div>
	</button>
	{#if isOpen}
		<ul transition:slide class="bg-orange-50 shadow-md">
			<MobileNavButton params={homeButtonParams} />
			<hr class="border-slate-400" />
			{#each navButtons as button, i}
				<MobileNavButton params={button} />
				{#if i < navButtons.length - 1}
					<hr class="border-slate-400" />
				{/if}
			{/each}
		</ul>
		<div class="bg-orange-600 flex flex-row w-full items-center justify-center py-2">
			<ContactButton params={phoneButtonParams}>03-5302-2239</ContactButton>
		</div>
	{/if}
</nav>
