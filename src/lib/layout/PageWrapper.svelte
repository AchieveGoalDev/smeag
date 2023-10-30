<script lang="ts">
	import Footer from '$lib/layout/footer/Footer.svelte';
	import { window } from '$lib/store/window';

	function parseScroll() {
		$window.mainScrollY = main.scrollTop;
	}

	let main: HTMLElement;
</script>

<main
	on:scroll={parseScroll}
	bind:this={main}
	style:max-height={`${$window.height - 80}px`}
	class="overflow-y-auto"
>
	<slot />

	<Footer />
</main>

<style class="postcss">
	main {
		scroll-behavior: smooth;
	}
</style>
