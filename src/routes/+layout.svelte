<script lang="ts">
	import NavBar from '$lib/layout/nav/NavBar.svelte';
	import { window } from '$lib/store/window';
	import '../app.css';

	$: windowWidth = 0;
	$: windowHeight = 0;

	$: $window.width = windowWidth;
	$: $window.height = windowHeight;

	$: console.log($window);
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />
<NavBar />
<div class="text-slate-800">
	<slot />
</div>
