<script lang="ts">
	export let angle: number;
	export let url: string;

	import { fly, fade } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
</script>

<figure
	in:fly={{ x: 100, duration: 500, easing: circOut }}
	out:fade
	style:transform={`rotate(${angle}deg)`}
	class="w-[300px] lg:h-auto lg:w-[500px] bg-gradient-to-br from-white from-30% to-90% to-slate-50 shadow-xl p-[1rem] select-none overflow-visible col-span-full row-span-full mx-auto"
>
	<div style:background-image={`url(${url})`} class="h-[200px] lg:h-[300px] trimshadow bg-cover" />
	<figcaption
		style:font-family="NM"
		class="text-3xl flex flex-row w-full justify-center items-center"
	>
		<slot />
	</figcaption>
</figure>

<style lang="postcss">
	.trimshadow {
		box-shadow: inset 3px 3px 25px rgba(0, 0, 0, 0.4);
	}

	@font-face {
		font-family: 'NM';
		src: url('fonts/natumemozi.ttf');
	}
</style>
