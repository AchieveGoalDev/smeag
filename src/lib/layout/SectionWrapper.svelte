<script lang="ts">
	import { slide } from 'svelte/transition';

	export let params: {
		themeColor: string;
	};

	let isOpen = true;

	function handleThemeColor(themColor: string) {
		return 'bg-orange-50';
	}
</script>

<div class={handleThemeColor(params.themeColor)}>
	<div>
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
