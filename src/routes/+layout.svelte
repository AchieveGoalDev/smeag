<script lang="ts">
	import { window } from '$lib/store/window';
	import '../app.css';

	$: windowWidth = 0;
	$: windowHeight = 0;

	$: $window.width = windowWidth;
	$: $window.height = windowHeight;

	$: console.log($window);
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />
<nav class="h-[80px] bg-white drop-shadow-lg flex-col sticky">
	<div class="flex flex-row h-full items-center">
		<div class="text-4xl font-heading-en text-orange-600 w-1/5">SMEAG</div>
		<div
			class="text-4xl font-normal-en font-light text-slate-800
			 w-3/5"
		>
			SMEAG
		</div>
	</div>
	<div class="flex flex-row h-[10px] w-full">
		<div class="w-1/4 bg-orange-600" />
		<div class="w-1/4 bg-sky-500" />
		<div class="w-1/4 bg-green-500" />
		<div class="w-1/4 bg-purple-500" />
	</div>
</nav>
<div class="text-slate-800">
	<slot />
</div>
