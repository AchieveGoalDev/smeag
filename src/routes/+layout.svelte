<script lang="ts">
	import NavBar from '$lib/layout/nav/NavBar.svelte';
	import { window } from '$lib/store/window';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import '../app.css';
	import { fade } from 'svelte/transition';

	export let data;

	onNavigate((navigation) => {
		//@ts-expect-error: I know
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			//@ts-expect-error: I know
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	$: windowWidth = 0;
	$: windowHeight = 0;

	$: $window.width = windowWidth;
	$: $window.height = windowHeight;

	$: console.log($window);
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />
<NavBar />
<div class="text-slate-800">
	{#key data.url}
		<div in:fade={{ delay: 500, duration: 500 }} out:fade={{ duration: 500 }}>
			<slot />
		</div>
	{/key}
</div>
