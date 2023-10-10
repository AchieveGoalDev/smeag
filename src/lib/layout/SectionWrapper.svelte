<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import SectionToggle from '$lib/components/buttons/SectionToggle.svelte';

	export let params: {
		themeColor: string;
		borderStyle: 'y' | 'top' | 'bottom' | 'none';
	};

	let isOpen = true;

	function handleThemeColor(themeColor: string) {
		return ' bg-white py-5';
	}
</script>

<div class={handleThemeColor(params.themeColor)}>
	<div>
		<h2 class="flex flex-row">
			<SectionToggle bind:toggle={isOpen} />
			<slot name="heading" />
		</h2>
	</div>
	{#if isOpen}
		<div transition:slide>
			<slot />
		</div>
	{/if}
</div>
