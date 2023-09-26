<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	export let params: {
		themeColor: string;
	};

	let isOpen = true;

	function handleThemeColor(themColor: string) {
		return 'bg-orange-50 border-orange-600 border-y-4 py-5';
	}
</script>

<div class={handleThemeColor(params.themeColor)}>
	<div>
		<button class="rotate-90 active:rotate-180 transition-all" on:click={() => (isOpen = !isOpen)}>
			<Icon icon="ion:chevron-up" />
		</button>
		<h2>
			<slot name="heading" />
		</h2>
	</div>
	{#if isOpen}
		<div transition:slide>
			<slot />
		</div>
	{/if}
</div>
